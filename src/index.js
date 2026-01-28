import { getConfig } from './config/config.js';
import { createBot } from './bot/createBot.js';
import { createDb } from './db/index.js';
import { logger } from './logger.js';

async function main() {
  const config = getConfig();

  const db = await createDb(config.db);
  const bot = createBot({ botToken: config.botToken });

  if (config.webhook.enabled) {
    const { domain, path, port } = config.webhook;
    await bot.launch({
      webhook: {
        domain,
        hookPath: path,
        port,
      },
    });
    logger.info(`Бот запущен (webhook): ${domain}${path}`);
  } else {
    await bot.launch();
    logger.info('Бот запущен (long polling).');
  }

  const shutdown = async (signal) => {
    logger.info(`Shutting down (${signal})...`);
    try {
      bot.stop(signal);
    } catch (e) {
      logger.warn('bot.stop error:', e);
    }

    if (db.enabled) {
      try {
        await db.close();
      } catch (e) {
        logger.warn('db.close error:', e);
      }
    }

    process.exit(0);
  };

  process.once('SIGINT', () => void shutdown('SIGINT'));
  process.once('SIGTERM', () => void shutdown('SIGTERM'));
}

main().catch((err) => {
  logger.error('Fatal:', err);
  process.exit(1);
});
