import mongoose from 'mongoose';

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
  } catch (e) {
    console.log(`Error: ${e}`);
  }
};
