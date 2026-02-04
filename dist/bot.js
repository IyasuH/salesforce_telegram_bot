"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const grammy_1 = require("grammy");
dotenv.config();
const token = process.env.BOT_TOKEN;
if (!token) {
    throw new Error("BOT_TOKEN is not set");
}
const bot = new grammy_1.Bot(token);
bot.command("start", (ctx) => ctx.reply("Hello!"));
bot.on("message", (ctx) => ctx.reply("Hello!"));
bot.start();
//# sourceMappingURL=bot.js.map