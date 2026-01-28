import { Telegraf } from 'telegraf';
import { registerHandlers } from './registerHandlers.js';
import { logger } from '../logger.js';

export function createBot({ botToken }) {
  const bot = new Telegraf(botToken);

  registerHandlers(bot);

  bot.catch((err, ctx) => {
    logger.error(`Ошибка для ${ctx.updateType}:`, err);
  });

  return bot;
}
