import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

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
bot.launch().then(() => {
  console.log('Бот запущен!');
});

// Graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
