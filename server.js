// require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', (error)=> console.error(error))
db.once('open', ()=> console.log("Connected to DB"))

app.use(express.json())

const todoRouter = require("./route/todo")
const userRouter = require("./route/user")
app.use("/todo", todoRouter)
app.use("/user", userRouter)

app.listen(process.env.PORT, ()=> console.log(`App running at port ${process.env.PORT}`))