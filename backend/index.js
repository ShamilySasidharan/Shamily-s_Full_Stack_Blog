import express from "express";
import userRouter from "./routes/user.route.js";
import commentsRouter from "./routes/comments.route.js"
import postRouter from "./routes/post.route.js"
import connectDB from "./lib/connectDB.js";

// 1.CREATE APP
const app = express()
// ENV KEY PROCESSING
// console.log(process.env.key)
// console.log(process.env.port)

//  CREATING THE FIRST API REQUEST
// app.get("/test",(req,res)=>{
//     res.status(200).send("works !!!!!!!")
// })

// API FETCHING FROM THE FOLDER
app.use("/users",userRouter)
app.use("/comments",commentsRouter)
app.use("/posts",postRouter)

// 2.PORT
app.listen(3500,()=>{
    connectDB()
    console.log("listening to the port 3500")
})