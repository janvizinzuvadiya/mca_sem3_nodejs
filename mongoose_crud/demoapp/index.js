import mongoose from "mongoose";
import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const MONGODB_URI =
  "mongodb+srv://zinzuvadiyajanvi4_db_user:LvzuH9MpcMxbqQj0@cluster0.s3l6uab.mongodb.net/";

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not set");
}

mongoose.connection.on("connected", () => {
  console.log("✅ MongoDB Connected");
  console.log("Database:", mongoose.connection.name);
});

mongoose.connection.on("error", (err) => {
  console.log("❌ Connection Error");
  console.log("Cloud Atlas connection could not be established.");
});

mongoose.connection.on("disconnected", () => {
  console.log("⚠️ MongoDB Disconnected");
});

async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      tls: true,
      authSource: "admin",
    });
  } catch (error) {
    console.log("❌ Connection Error");
    console.log("Cloud Atlas connection could not be established.");
  }
}

connectDB();