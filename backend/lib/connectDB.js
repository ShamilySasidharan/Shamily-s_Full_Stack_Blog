import mongoose from "mongoose";
// THE DATABASE CONNECTIONS ARE STORE IN THE LIB FOLDER
// NEXTWORK ACCESS TO THE ANYWHERE AFTER DEPLOYMENT CONNECT WITH SERVER S
const connectDB = async()=>{
  try{
   await mongoose.connect(process.env.MONGO);
   console.log("connected to mongodb")
  }
  catch(err){
  console.log(err)
  }
}

export default connectDB