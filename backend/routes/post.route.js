import express from "express"
import Post from "../models/post.model.js"
// POST ROUTER
const router = express.Router()
// API CALLS
//1.getting all the posts
router.get("/", async(req,res)=>{
    // const posts  =  await Post.find()
    // res.status(200).send(posts)

    try{
     const posts  =  await Post.find()
    res.status(200).send(posts)
    }catch (error) {
        res.status(500).send({ message: 'Error fetching ', error });
      }

})
export default router;