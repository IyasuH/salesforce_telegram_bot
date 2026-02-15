import { conn } from "../connection.js";

export async function getAccounts(): Promise<void> {
  try {
    const result = await conn.query("SELECT Id, Name FROM Account LIMIT 10");
    console.log(result.records);
  } catch (err) {
    console.error(err);
  }
}
