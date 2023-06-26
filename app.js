const express = require ("express")
const app=express()

require ('dotenv').config()

app.use(express.json())

const product =require('./routes/productos')
app.use("/api",product)


app.listen(process.env.PORT,() => console.log("server is running on port 5000"))
