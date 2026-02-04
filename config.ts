import * as dotenv from "dotenv";

declare const process: {
  env: Record<string, string | undefined>;
};

dotenv.config();

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is not set`);
  }
  return value;
}

export const sf_client_id: string = requireEnv("CLIENT_ID");
export const sf_client_secret: string = requireEnv("CLIENT_SECRET");
export const sf_instance_url: string = requireEnv("INSTANCE_URL");
export const sf_access_token: string = requireEnv("ACCESS_TOKEN");
export const sf_refresh_token: string = requireEnv("REFRESH_TOKEN");
export const sf_redirect_uri: string = requireEnv("REDIRECT_URI");
export const bot_token: string = requireEnv("BOT_TOKEN");
export const login_url: string = requireEnv("LOGIN_URL")
