import jsforce from "jsforce";
import jwt from "jsonwebtoken";
import { readFile } from "fs/promises";
import { sf_client_id, login_url} from "./config.js";

export const conn_jwt = new jsforce.Connection();

const claim = {
  iss: sf_client_id,
  sub: "contact@iyasu.dev",
  aud: login_url,
  exp: Math.floor(Date.now() / 1000) + 3600,
  iat: Math.floor(Date.now() / 1000),
};

async function authenticate() {
  const privateKey = await readFile("./private.key");
  
  const bearerToken = jwt.sign(claim, privateKey, { algorithm: "RS256" });
  const userInfo = await conn_jwt.authorize({
    grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    assertion: bearerToken
  });

  console.log(conn_jwt.accessToken);
  console.log(conn_jwt.instanceUrl);

  // logged in user property
  console.log("User ID: " + userInfo.id);
  console.log("Org ID: " + userInfo.organizationId);
}

authenticate().catch(console.error);
