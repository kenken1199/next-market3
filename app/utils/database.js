import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kenken1199:Kenta2428@cluster0.aythxuz.mongodb.net/nextMarket15Data?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Sucess: Connected to MongoDB");
  } catch (err) {
    console.log("Failure: Unconnected to MongoDB");
    throw new Error();
  }
};

export default connectDB;
