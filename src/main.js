import express from "express"
import "dotenv/config"
import Mongo_connect from "./config/database.js"
import router from "./routers/router.js"

let server = express()
server.use(express.json())
let PORT = process.env.PORT || 4000


await Mongo_connect()
server.use(router)


server.listen(PORT,()=> console.log(`Server is running...${PORT}-port`))
    