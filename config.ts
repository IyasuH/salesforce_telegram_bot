import dotenv from "dotenv";

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

function optionalEnv(name: string): string {
  return process.env[name] || "";
}

export const sf_client_id: string = requireEnv("CLIENT_ID");
export const sf_client_secret: string = requireEnv("CLIENT_SECRET");
export const sf_instance_url: string = requireEnv("INSTANCE_URL");
export const sf_access_token: string = optionalEnv("ACCESS_TOKEN");
export const sf_refresh_token: string = optionalEnv("REFRESH_TOKEN");
export const sf_redirect_uri: string = requireEnv("REDIRECT_URI");
export const bot_token: string = requireEnv("BOT_TOKEN");
export const login_url: string = requireEnv("LOGIN_URL");
export const user_name: string = requireEnv("USER_NAME");
export const auth_type: string = requireEnv("AUTH_TYPE");

