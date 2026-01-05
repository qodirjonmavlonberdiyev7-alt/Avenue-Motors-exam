const express = require("express")
const cors = require("cors")
const automobileRouter = require("./router/automobile.routes")



require("dotenv").config()

const app = express()




// router
app.use(automobileRouter)