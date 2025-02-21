import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}

const nonPoolingUrl = process.env.DATABASE_URL!.replace(":6543", ":5432");

export default defineConfig({
  out: "./src/migrations",
  schema: "./src/schemas",
  dialect: "postgresql",
  dbCredentials: {
    url: nonPoolingUrl,
  },
  strict: true,
  verbose: true,
  casing: "snake_case",
});
