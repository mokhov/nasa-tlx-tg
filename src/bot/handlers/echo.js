export function registerEcho(bot) {
  bot.on('text', (ctx) => {
    ctx.reply(`Вы написали: ${ctx.message.text}`);
  });
}
