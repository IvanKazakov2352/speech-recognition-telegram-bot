# Телеграм бот созданный для распознавания речи

Стек: TypeScript, Node JS, node-telegram-bot-api, axios, Yandex Cloud

# Установка
1) Клонировать репозиторий
2) Перейти в корневую папку телеграм бота.
3) Выполнить команду npm install предварительно должен быть установлен NodeJS на компьютер.
4) После установки пакетов зависимостей выполнить команду npm run build.

# Ключи для доступа к API Yandex Cloud
1) Перейти на сайт Yandex Cloud
2) Создать платежный аккаунт
3) Перейти в Консоль управления Yandex Cloud и в разделе "Сервисные аккаунты" создать сервисный аккаунт
4) В разделе после создания сервисного аккаунта, создать API-ключ дляь доступа к API
5) Скопировать ключ и сохранить в файле .env, в строке API_KEY_SPEECH_RECOGNITION вместо значения YOUR_API_KEY_SPEECH_RECOGNITION

# Создание Telegram Bot 
1) В поиске наберите BotFather и найдите этого бота
2) В меню выберите /newbot и следуя инструкциям создайте бота
3) После того как создали бота появится сообщение о том что бот успешно создан и вам будет дан ключ вашего бота, сохраните его в файле .env в поле API_KEY_TELEGRAM_BOT вместо значения YOUR_API_KEY_TELEGRAM_BOT