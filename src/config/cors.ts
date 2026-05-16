import type { CorsOptions } from "cors";

import { env, securityConfig } from "./env";

export const corsOptions: CorsOptions = {
  origin(origin, callback) {
    if (!origin) {
      callback(null, true);
      return;
    }

    if (
      env.NODE_ENV !== "production" &&
      securityConfig.allowedOrigins.includes("*")
    ) {
      callback(null, true);
      return;
    }

    if (securityConfig.allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }

    callback(new Error("Origin not allowed by CORS"));
  },
  credentials: false,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
};
