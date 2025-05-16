import express from "express"
import "dotenv/config"
import Mongo_connect from "./config/database.js"
import router from "./routers/router.js"
import router_post from "./routers/post.js"

let server = express()
let PORT = process.env.PORT || 4000
server.use(express.json())

await Mongo_connect()
server.use(router)
server.use(router_post)


server.listen(PORT,()=> console.log(`Server is running...${PORT}-port`))
    