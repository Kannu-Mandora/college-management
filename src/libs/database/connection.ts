import { connect, disconnect } from "mongoose";

export const connectDatabase = async () => {
  try {
    await connect(process.env.MONGO_URI!);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

export const disconnectDatabase = async () => {
  try {
    await disconnect();
    console.log("Database disconnected");
  } catch (error) {
    console.log(error);
  }
};
