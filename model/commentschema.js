const mongoose = require('mongoose')

const post = new mongoose.Schema({
    comment_id:{type:Number},
     comments_content :{type:String,require:true},
     comments_Author :{type:String,require:true},
    comments_createat : {type:String,require :true}
})


module.exports = mongoose.model("comment_Schema",post)