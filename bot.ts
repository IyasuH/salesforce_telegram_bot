import { Bot } from "grammy";
import { bot_token } from "./config.js";
// import { getAccounts } from "./sf_handler/account";
import { getTelegramContact, createTelegramContact } from "./sf_handler/Telegram_Contact__c.js";
import { getAccounts } from "./sf_handler/account.js";

if (!bot_token) {
  throw new Error("BOT_TOKEN is not set");
}

const bot = new Bot(bot_token);

bot.command("start", async (ctx) => {
    ctx.reply("Hello!");
    await getAccounts();
    const sf_tg_contact = await getTelegramContact(ctx.from?.id?.toString() || "");
    if (sf_tg_contact?.length || 0 > 0) {
        ctx.reply("Hi " + ctx.from?.first_name + " Welcome back");
    } else {
        await getAccounts();
        const result = await createTelegramContact({
            First_Name__c: ctx.from?.first_name || "",
            Last_Name__c: ctx.from?.last_name || "",
            User_ID__c: ctx.from?.id?.toString() || "",
            UserName__c: ctx.from?.username || "",
            Language__c: ctx.from?.language_code || ""
        })
        if (result?.success) {
            ctx.reply("You are registered");
        }
        else {
            ctx.reply("Something went wrong");
        }
    }
});

bot.on("message", (ctx) => ctx.reply("Hello!"));

bot.start();
