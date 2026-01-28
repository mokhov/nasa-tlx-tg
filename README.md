# nasa-tlx-tg

# NASA TLX Telegram Bot

Телеграм-бот для работы с NASA TLX (Task Load Index).

## Установка

1. Клонируйте репозиторий:
```bash
git clone <your-repo-url>
cd nasa-tlx-tg
```

2. Установите зависимости:
```bash
npm install
```

3. Создайте файл `.env` на основе `env.example`:
```bash
cp env.example .env
```

4. Получите токен бота у [@BotFather](https://t.me/BotFather) и добавьте его в `.env`:
```
BOT_TOKEN=your_bot_token_here
```

## Запуск

### Режим разработки (с автоперезагрузкой):
```bash
npm run dev
```

### Продакшн режим:
```bash
npm start
```

## Структура проекта

```
nasa-tlx-tg/
├── bot.js          # Основной файл бота
├── package.json    # Зависимости проекта
├── env.example     # Пример файла с переменными окружения
├── .gitignore      # Игнорируемые файлы для Git
└── README.md       # Документация
```

## Разработка

Проект использует:
- [Telegraf](https://telegraf.js.org/) - современная библиотека для создания Telegram ботов
- Node.js ES modules (type: "module")

## Лицензия

MIT
