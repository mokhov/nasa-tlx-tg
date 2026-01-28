import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';

dotenv.config();

const BOT_TOKEN = process.env.BOT_TOKEN;
if (!BOT_TOKEN) {
  console.error('BOT_TOKEN is required. Put it into .env or environment variables.');
  process.exit(1);
}

const bot = new Telegraf(BOT_TOKEN);

// Обработчик команды /start
bot.start((ctx) => {
  ctx.reply('Привет! Я телеграм-бот для NASA TLX. Используйте /help для списка команд.');
});

// Обработчик команды /help
bot.help((ctx) => {
  ctx.reply(`
Доступные команды:
/start - Начать работу с ботом
/help - Показать это сообщение
  `);
});

// Обработчик текстовых сообщений
bot.on('text', (ctx) => {
  ctx.reply(`Вы написали: ${ctx.message.text}`);
});

// Обработка ошибок
bot.catch((err, ctx) => {
  console.error(`Ошибка для ${ctx.updateType}:`, err);
});

// Запуск бота
async function start() {
  const webhookDomain = process.env.WEBHOOK_DOMAIN; // пример: https://your.domain
  const hookPath = process.env.WEBHOOK_PATH || '/telegram';
  const port = Number(process.env.PORT || 3000);

  if (webhookDomain) {
    await bot.launch({
      webhook: {
        domain: webhookDomain,
        hookPath,
        port,
      },
    });
    console.log(`Бот запущен (webhook): ${webhookDomain}${hookPath}`);
    return;
  }

  await bot.launch();
  console.log('Бот запущен (long polling).');
}

start().catch((err) => {
  console.error('Не удалось запустить бота:', err);
  process.exit(1);
});

// Graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
