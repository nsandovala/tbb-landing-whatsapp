import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';

// Cliente Neon serverless (HTTP) — ideal para Route Handlers en Vercel.
if (!process.env.DATABASE_URL) {
  throw new Error('Falta DATABASE_URL en el entorno (.env.local / Vercel env).');
}

const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql, { schema });
