import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "work_manager",
    });
  } catch (err) {
    console.log(err);
  }
};

export { connectDb };
