export function registerStart(bot) {
  bot.start((ctx) => {
    ctx.reply('Привет! Я телеграм-бот для NASA TLX. Используйте /help для списка команд.');
  });
}
