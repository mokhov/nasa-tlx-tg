export function registerHelp(bot) {
  bot.help((ctx) => {
    ctx.reply(`
Доступные команды:
/start - Начать работу с ботом
/help - Показать это сообщение
    `);
  });
}
