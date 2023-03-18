const express = require("express")
const app = express()

require('dotenv').config()

require("./configs/mongoose.config")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

require("./routes/jokes.routes")(app)

app.listen(8000, ()=>console.log(`listening on port: 8000`))