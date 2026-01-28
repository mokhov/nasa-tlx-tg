import { logger } from '../logger.js';
import { createPool } from './pool.js';

export async function createDb({ enabled, url }) {
  if (!enabled) {
    return { enabled: false, pool: null };
  }

  const pool = createPool(url);

  // Простой health-check при старте
  await pool.query('select 1 as ok');
  logger.info('DB connected');

  return {
    enabled: true,
    pool,
    async close() {
      await pool.end();
      logger.info('DB disconnected');
    },
  };
}
