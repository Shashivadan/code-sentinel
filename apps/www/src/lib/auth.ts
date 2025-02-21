import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@codesentinel/db/client";
import { headers } from "next/headers";
import { nextCookies } from "better-auth/next-js";
import { user, session, account, verification } from "@codesentinel/db/schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: { user, session, account, verification },
  }),
  socialProviders: {
    github: {
      clientId: "Ov23likQBpjfqbLiQUju",
      clientSecret: "f6b27c8606a0657dc8ed697c5ce3c862a9884e70",
    },
  },

  plugins: [nextCookies()],
});

console.log("Auth object initialized:", auth);

export async function currentUser() {
  "use server";
  return await auth.api.getSession({
    headers: await headers(),
  });
}
