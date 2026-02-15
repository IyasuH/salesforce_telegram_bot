import { auth_type } from "./config.js";
import { conn_jwt } from "./jwt_flow.js";
import { conn_client_credential } from "./client_credential_flow.js";

export const getConnection = () => {
  return auth_type === "JWT_Bearer" ? conn_jwt : conn_client_credential;
};

export const conn = getConnection();
