const mongoose = require('mongoose')

const post = new mongoose.Schema({
    post_id:{type:Number},
     post_title :{type:String,require:true},
     post_content :{type:String,require:true},
     post_Author :{type:String,require:true},
     post_tags : {type:String,require :true}
})


module.exports = mongoose.model("Post_Schema",post)