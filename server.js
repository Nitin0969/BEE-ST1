const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
app.use(express.json());
const dB = require('./Middlewares/dB');

dB.connectToDb();
const userData = require('./model/postSchema.js');

const routes = require("./Routes/userroutes");
app.use("/",routes);


app.listen(3002,()=>{
    console.log(`server is statred on 3002`);
})

