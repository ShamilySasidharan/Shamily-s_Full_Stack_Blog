import express from "express"

const app = express()
console.log(process.env.key)
console.log(process.env.port)
app.listen(3000,()=>{
    console.log("listen to the port 3000")
})