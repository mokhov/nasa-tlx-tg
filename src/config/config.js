import { optionalEnv, requireEnv } from './env.js';

export function getConfig() {
  const botToken = requireEnv('BOT_TOKEN');

  const webhookDomain = optionalEnv('WEBHOOK_DOMAIN'); // пример: https://your.domain
  const webhookPath = optionalEnv('WEBHOOK_PATH', '/telegram');
  const port = Number(optionalEnv('PORT', '3000'));

  const databaseUrl = optionalEnv('DATABASE_URL'); // например: postgres://user:pass@host:5432/db

  return {
    botToken,
    webhook: webhookDomain
      ? { enabled: true, domain: webhookDomain, path: webhookPath, port }
      : { enabled: false },
    db: databaseUrl ? { enabled: true, url: databaseUrl } : { enabled: false },
  };
}
