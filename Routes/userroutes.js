const express=require("express");
const app = express();
const router=express.Router();

const datacontrol = require('../Controller/datacontrol')



app.use('/POST/api/posts',datacontrol.register);
app.use('/DELETE/api/posts',datacontrol.deletepost);
app.use('/PUT/api/posts',datacontrol.updatepost);
app.use('/GET/api/posts',datacontrol.getdata);
app.use("",router)   
module.exports=app;


