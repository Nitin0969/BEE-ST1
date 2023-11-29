const moongose = require('mongoose')
const user = require("../model/commentschema")

exports.findbypost_id= async(comment_id)=>{
    return await user.findOne({'comment_id':comment_id}).select('_id').lean()
}
exports.createuser = async(data)=>{
    return await user.create(data);
}