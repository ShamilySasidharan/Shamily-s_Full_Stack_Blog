import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new mongoose(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    img: {
      type: String,
    },
    savedPost: {
      type: [String], //when user click post btn will have many post
      default: false, //starting no post
    },
  },
  { timestamps: true }
);

export default mongoose.model("User",userSchema)