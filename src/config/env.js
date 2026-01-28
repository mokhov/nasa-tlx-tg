import dotenv from 'dotenv';

// Загружаем .env в dev/локально. В проде обычно задают env vars через панель/секреты.
dotenv.config();

export function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is required`);
  }
  return value;
}

export function optionalEnv(name, defaultValue = undefined) {
  const value = process.env[name];
  return value ?? defaultValue;
}
