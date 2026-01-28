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

5. (Опционально) Настройте БД Postgres:
```
DATABASE_URL=postgres://user:password@host:5432/dbname
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

## Деплой на Timeweb (подготовка)

Ниже два варианта деплоя — выбирай тот, который соответствует твоему тарифу/продукту Timeweb.

### Вариант A: Timeweb Cloud Apps / Docker

1. Собери и запусти контейнер локально (проверка):
```bash
BOT_TOKEN=... docker compose up --build
```

2. В панели Timeweb создай приложение из репозитория и задай переменные окружения:
- `BOT_TOKEN` — обязателен
- (опционально) `WEBHOOK_DOMAIN`, `WEBHOOK_PATH`, `PORT` — если хочешь webhook-режим

По умолчанию бот работает в **long polling** и не требует входящего порта.

### Вариант B: VPS (systemd)

Идея: поставить Node.js 18+/20+, клонировать репозиторий, настроить `.env`, и запускать бот как сервис.

Минимальные шаги на сервере:
```bash
git clone git@github.com:mokhov/nasa-tlx-tg.git
cd nasa-tlx-tg
cp env.example .env
nano .env   # впиши BOT_TOKEN
npm install
npm start
```

Если хочешь — добавлю готовый `systemd` unit-файл под Timeweb VPS, чтобы бот поднимался после ребута.

## Структура проекта

```
nasa-tlx-tg/
├── Dockerfile      # Сборка контейнера
├── docker-compose.yml
├── .dockerignore
├── bot.js          # Совместимость: entrypoint (импортирует src/index.js)
├── package.json    # Зависимости проекта
├── env.example     # Пример файла с переменными окружения
├── .gitignore      # Игнорируемые файлы для Git
├── src/            # Исходники
│   ├── index.js
│   ├── logger.js
│   ├── config/
│   ├── bot/
│   └── db/
└── README.md       # Документация
```

## Разработка

Проект использует:
- [Telegraf](https://telegraf.js.org/) - современная библиотека для создания Telegram ботов
- Node.js ES modules (type: "module")

## Лицензия

MIT
