import mongoose from "mongoose";

// ✅ Import Mongoose (MongoDB ODM) to connect & manage the database

const MONGODB_URI = process.env.MONGODB_URI as string;
// ✅ Get your MongoDB connection string from environment variables (.env.local file)
// `as string` is used because process.env returns string | undefined

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}
// ❌ If the environment variable is missing, throw an error early
// Helps avoid "undefined" errors during connection

declare global {
  var mongoose: any;
}

let cached = global.mongoose;
// ✅ Access the global variable "mongoose" if it already exists
// This is a trick to persist the DB connection across hot reloads in Next.js dev mode

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}
// ✅ If no global "cached" connection exists, initialize it with:
// - conn: stores the actual connection object
// - promise: stores the ongoing connection promise (to avoid duplicate connections)

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }
  // ✅ If already connected, reuse the existing connection

  //   if (!cached.promise) {
  //     cached.promise = (async () => {
  //       const conn = await mongoose.connect(MONGODB_URI);
  //       console.log("✅ MongoDB connected successfully");
  //       return conn;
  //     })();
  //   }

  if (!cached.promise) {
    const connectAndLog = async () => {
      const conn = await mongoose.connect(MONGODB_URI);
      console.log("✅ MongoDB connected successfully");
      return conn;
    };

    cached.promise = connectAndLog();
  }

  // ✅ If there's no connection in progress,
  // start a new one using mongoose.connect()
  // Save the promise so future calls reuse this instead of making a new one

  cached.conn = await cached.promise;
  // ✅ Wait for the connection to complete, then store it in `conn`
  // So future `dbConnect()` calls can instantly return this
  return cached.conn;
  // ✅ Finally, return the connected Mongoose instance
}

export default dbConnect;
