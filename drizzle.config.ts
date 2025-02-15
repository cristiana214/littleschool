import { defineConfig } from "drizzle-kit";

// Define the configuration for Drizzle
export default defineConfig({
  dialect: "mysql", // The database dialect
  schema: "./src/drizzle/schema/index.ts", // Path to your schema
  out: "./src/drizzle/test", // Output directory
  dbCredentials: {
    host: process.env.DATABASE_URL,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: "drizzle_test",
  },
});
// npx drizzle-kit generate
// npx drizzle-kit mi
