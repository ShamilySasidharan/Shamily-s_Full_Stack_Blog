// using this route for the user database collection

import express from "express"
// USER ROUTER
const router = express.Router()
// API CALLS
router.get("/anotherTest",(req,res)=>{
    res.status(200).send("from user")
})

export default router