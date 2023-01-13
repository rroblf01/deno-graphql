import { config as cfg } from "../deps.ts";

export const getMongoCredentials = () => {
  if (Deno.env.get("IS_PROD")) {
    return {
      user: Deno.env.get("MONGO_USER"),
      password: Deno.env.get("MONGO_PASSWORD"),
    };
  } else {
    const config = cfg({ safe: true });
    return {
      user: config.MONGO_USER,
      password: config.MONGO_PASSWORD,
    };
  }
};
