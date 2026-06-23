import { MongoClient } from "mongodb";

// MONGO DB CONNECTION

const uri = "mongodb://localhost:27017";
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
