const express = require("express")
const path = require("node:path")
require('dotenv').config()
const messageRoute = require('./route/messageRoute')

app = express()
app.use(express.urlencoded({extended:true}))
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use('/message',messageRoute)

port = process.env.PORT | 3000
app.listen(port,()=>{
    console.log(`serving on port ${port}`)
})