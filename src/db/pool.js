import pg from 'pg';

const { Pool } = pg;

/**
 * Создаёт пул PostgreSQL соединений.
 * DATABASE_URL формат: postgres://user:pass@host:5432/db
 */
export function createPool(databaseUrl) {
  return new Pool({
    connectionString: databaseUrl,
    // Timeweb/managed Postgres часто требует SSL. При необходимости включается через PGSSLMODE или параметрами ниже.
    // ssl: { rejectUnauthorized: false },
  });
}
