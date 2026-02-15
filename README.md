## Salesforce Telegram Bot Integration

This is an integration guide for Salesforce and Telegram bot using (JSFORCE)[https://jsforce.github.io/], (GRAMMY)[https://grammy.dev/], (JWT)[https://jwt.io/].

It tries to demostrate the OAuth 2.0 JWT Bearer Token and Client Credential Flows for Salesforce.

### For JWT Bearer Token Flow

You need to generate a private key and certificate for the connected app in Salesforce.

You can generate private key and certificate using openssl.

```bash
openssl genpkey -algorithm RSA -out private.key -pkeyopt rsa_keygen_bits:2048
openssl req -new -x509 -key private.key -out server.crt -days 365
```

You need to create a external client app in Salesforce 
- And enable OAuth
- and add callback URL
- and add api, refresh token and offline_access scopes
- Enable JWT Bearer Token Flow
- Upload certificate
Save it.

Then edit the plugin policy, change the permitted users to `Admin approved users are pre-authorized`.

Then change the user profile to `System Administrator` (or what ever profile you gave defined to USER_NAME).


### For Client Credential Flow



### To start

1. Clone the repository
2. Install dependencies (`pnpm install`)
3. Configure the environment variables

- For JWT Bearer Token Flow you need only CLIENT_ID, LOGIN_URL, BOT_TOKEN, USER_NAME env variables.

- FOr Client Credential Flow you need only CLIENT_ID, CLIENT_SECRET, INSTANCE_URL, ACCESS_TOKEN, REFRESH_TOKEN, REDIRECT_URI, BOT_TOKEN, env variables.

4. Run the bot (`pnpm run dev`)

