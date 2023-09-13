const express = require('express')
const user = require('./routeCompo/route')

const dotenv = require('dotenv')
dotenv.config()
const app = express()
const port = process.env.port
app.use(express.json()) // bodyparcer

app.use('/user' , user)

app.listen(port, () => {
    console.log(`server is running in port ${port}`)
})