import { createAuthClient } from "better-auth/react";
import { siteConfig } from "@/src/lib/site";
import { useRouter } from "next/navigation";

export const authClient = createAuthClient({
  baseURL: siteConfig.url,
});

export const { signIn, signOut, useSession } = authClient;

export type AuthClient = typeof authClient;
