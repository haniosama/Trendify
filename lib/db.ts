import mongoose from "mongoose";

const connectDb = async () => {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error("MONGO_URL environment variable is not defined");
    }
    const URL = process.env.MONGO_URL;
    await mongoose.connect(URL);
    console.log("Connected to MongoDB");
  } catch (error: Error | unknown) {
    console.error(`Error ${(error as Error).message}`);
    throw error;
  }
};
export default connectDb;
