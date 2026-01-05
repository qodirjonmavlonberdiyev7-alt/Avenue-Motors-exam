const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db.config")
const automobileRouter = require("./router/automobile.routes")
const brandRouter = require("./router/brand.routes")



require("dotenv").config()

const app = express()

const PORT = process.env.PORT || 3000

app.use(cors({origin: true, credentials: true}))
app.use(express.json())

connectDB()


// router
app.use(automobileRouter)
app.use(brandRouter)




app.listen(PORT, () => {
    console.log("Ishladi: " + PORT);
})