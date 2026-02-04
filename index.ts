import { sf_client_id, sf_client_secret, sf_instance_url, sf_access_token, sf_refresh_token, sf_redirect_uri, login_url } from "./config";  
import * as jsforce from "jsforce";

const oauth2 = new jsforce.OAuth2({
  loginUrl: login_url,
  clientId: sf_client_id,
  clientSecret: sf_client_secret,
  redirectUri: sf_redirect_uri
});

 export const conn = new jsforce.Connection({
  oauth2,
    instanceUrl: sf_instance_url,
    accessToken: sf_access_token,
  refreshToken: sf_refresh_token,
 });

conn.on("refresh", (accessToken: string) => {
    console.log("Token refreshed. New Token:", accessToken);
 });
