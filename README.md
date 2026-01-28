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
