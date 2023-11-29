const moongose = require('mongoose')
const user = require("../model/postSchema")

exports.findbypost_id= async(post_id)=>{
    return await user.findOne({'post_id':post_id}).select('_id').lean()
}
exports.createuser = async(data)=>{
    return await user.create(data);
}