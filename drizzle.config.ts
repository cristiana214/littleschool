// Define the configuration for Drizzle
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/database/schema.ts", // Path to your schema file
  out: "./src/database/migrations", // Where migrations will be stored
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL_POOL!,
  },
});
// npx drizzle-kit generate
// npx drizzle-kit mi
