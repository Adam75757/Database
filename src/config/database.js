import mongoose from "mongoose";

async function Mongo_connect() {
  try {
    await mongoose.connect("mongodb+srv://Faxriddin:11201111@cluster0.lrftgr1.mongodb.net/dars?retryWrites=true&w=majority&appName=Cluster0");

    console.log("MongoDB ga ulandi...");
  } catch (error) {
    console.log("MongoDB ulanishda xato:", error);
  }
}
    
export default Mongo_connect;
