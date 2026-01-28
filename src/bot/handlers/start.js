export function registerStart(bot) {
  bot.start((ctx) => {
    ctx.reply('Привет! Я телеграм-бот для NASA TLX. Используйте /help, чтобы узнать, что я умею.');
  });
}
