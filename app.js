const exprees = require ("express")
const app=Express()

require ('dotenv').config()

app.use(express.json())

const router =require('./routes/productos.js')

app.use ("/api/productos")

app.listen(process.env.PORT,() => console.log("server is running on port 5000"))
