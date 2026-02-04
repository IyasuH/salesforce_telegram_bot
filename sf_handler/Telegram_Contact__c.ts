import { conn } from "../index"; 
import { TelegramContact } from "../interface";

export async function getTelegramContact(userid: string) {
    try {
        const result = await conn.sobject("Telegram_Contact__c")
            .find({ User_ID__c: userid })
            .limit(1)
            .execute();
        console.log(result);
        return result;
    } catch (err) {
        console.error(err);
    }
}

export async function createTelegramContact(tg_data: TelegramContact) {
    try {
        const result = await conn.sobject("Telegram_Contact__c").create(tg_data);
        console.log(result);
        return result;
    } catch (err) {
        console.error(err);
    }
}
