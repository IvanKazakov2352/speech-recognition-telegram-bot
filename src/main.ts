import TelegramBot from "node-telegram-bot-api";
import axios, { AxiosResponse } from "axios";
import dotenv from "dotenv";
dotenv.config();

interface ApiResponse {
  result: string;
}

const bot = new TelegramBot(process.env.API_KEY_TELEGRAM_BOT as string, {
  polling: true,
});

bot.on("voice", async (message) => {
  if (message?.voice?.file_id) {
    const stream = bot.getFileStream(message.voice?.file_id);

    let chunks: Uint8Array[] = [];

    stream.on("data", (chunk: Uint8Array) => chunks.push(chunk));

    stream.on("end", async () => {
      const axiosConfig = {
        method: "POST",
        url: process.env.API_URL_SPEECH_RECOGNITION,
        headers: {
          Authorization: "Api-Key " + process.env.API_KEY_SPEECH_RECOGNITION,
        },
        data: Buffer.concat(chunks),
      };

      const chatId = message.chat.id;

      const response: AxiosResponse<ApiResponse> = await axios(axiosConfig)

      if(response.status === 200) {
        const text = response.data.result;
        return await bot.sendMessage(chatId, text);
      }
      if(response.status !== 200) {
        return await bot.sendMessage(chatId, 'Упс! Какая то ошибка с распознаванием речи!')
      }
    });
  }
});
