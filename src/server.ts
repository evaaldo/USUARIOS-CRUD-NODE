import express from "express"
import { router } from "./routes"

const server = express()
const port = 3000

server.use(router)
server.use(express.json())

server.listen(port, () => console.log(`Server is running on port ${port}`))