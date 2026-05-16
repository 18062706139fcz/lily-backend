import pino, { type LoggerOptions } from "pino";

import { env } from "./env";

const loggerOptions: LoggerOptions = {
  name: env.APP_NAME,
  level: env.LOG_LEVEL,
  ...(env.NODE_ENV === "development"
    ? {
        transport: {
          target: "pino-pretty",
          options: {
            colorize: true,
            translateTime: "SYS:standard",
          },
        },
      }
    : {}),
};

export const logger = pino(loggerOptions);
