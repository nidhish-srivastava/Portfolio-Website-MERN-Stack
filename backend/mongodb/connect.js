import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
let isConnected = false

export async function connectmongodb(){
    if (!process.env.MONGODB_URI) return console.log("Missing MongoDB URI");
    if (isConnected) {
        console.log("MongoDB connection already established");
        return;
      }
      try {
        await mongoose.connect(process.env.MONGODB_URI);

        isConnected = true; // Set the connection status to true
        console.log("MongoDB connected");
      } catch (error) {
        console.log(error);
      }
}