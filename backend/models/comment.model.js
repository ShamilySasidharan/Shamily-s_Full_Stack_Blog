import { Schema } from "mongoose";
import mongoose from "mongoose";

const commentSchema = new mongoose(
  {
    user:{
        type:Schema.Types.ObjectId, //to access the User schema
        ref:"User",
        required:true
      },

      post:{
        type:Schema.Types.ObjectId,
        ref:"Post",
        required:true
      },
    desc: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Comment",commentSchema)
