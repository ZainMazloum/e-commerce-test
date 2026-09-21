import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URL) {
  throw new Error('Please define the "MONGODB_URL" environment variable inside .env.local');
}

const uri = process.env.MONGODB_URL;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable to preserve the database connection
  // across HMR (Hot Module Replacement) reloads to prevent database exhaustion.
  const globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // In production mode, it's best to avoid global variables.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

