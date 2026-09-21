import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URL;

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectDB(): Promise<Db> {
  // If connection is already cached, reuse it
  if (cachedClient && cachedDb) {
    return cachedDb;
  }

  if (!uri) {
    throw new Error("MONGODB_URL environment variable is missing [10]");
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db("commerce-db");

  cachedClient = client;
  cachedDb = db;
  return db;
}