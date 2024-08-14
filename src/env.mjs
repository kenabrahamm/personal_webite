import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    WAKATIME_API_KEY: z.string().startsWith("waka_").optional(),
    GH_API_URL: z.string().startsWith("https://").optional(),
    // Add other server-side env vars here
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url(),
    // Add other client-side env vars here
  },
  runtimeEnv: {
    WAKATIME_API_KEY: process.env.WAKATIME_API_KEY,
    GH_API_URL: process.env.GH_API_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    // Add other env vars here
  },
});