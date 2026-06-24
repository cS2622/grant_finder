import { MongoClient } from "mongodb";
import dotenv from "dotenv";

// MONGO DB CONNECTION
dotenv.config();
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function connectClient() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
    return client.db("grantFinder");
  } catch (e) {
    console.error(e);
  }
}

export const db = await connectClient();
