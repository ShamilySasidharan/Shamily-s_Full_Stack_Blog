import express from "express"
// COMMENTS ROUTER
const comments = express.Router()
// API CALLS
comments.get("/testComments",(req,res)=>{
    res.status(200).send("from comments")
})
export default comments