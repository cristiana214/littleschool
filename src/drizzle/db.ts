/* eslint-disable import/no-extraneous-dependencies */
// https://orm.drizzle.team/docs/get-started-mysql
// https://orm.drizzle.team/docs/get-started-postgresql
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";
// create a new PostgreSQL client instance
const pool = new Pool({
  connectionString: process.env.DATABASE_URL_POOL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : undefined, // Enable SSL in production if needed
});

// initialize Drizzle with the pool
export const db = drizzle(pool, { schema });
