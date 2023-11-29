// const userData = require('../model/postSchema');
const commentdata = require('../model/commentschema');
const express = require ('express');
const userservice = require('../Services/postservices')


// delete the data
exports.deletepost=async(req,res)=>{
    try{
        const user=await commentdata.findOneAndDelete({comment_id:req.body.comment_id});
        res.send("data delete succesfully "+user);     
    }
    catch(erro){
        console.log("Error "+erro.message);
    }
    }

    // update the data
    exports.updatepost = async(req,res)=>{
        try{
         const user=await commentdata.findOneAndUpdate({comment_id:req.body.comment_id},{comments_content:req.body.comments_content,},{new:true});
         res.send("update succesfully "+user);     
     }
     catch(erro){
         console.log("Error "+erro.message);
     }
 }
//  get data

exports.getdata=async(req,res)=>{
    try{
        const data = await commentdata.findOne({comment_id:req.body.comment_id});
        res.send("data"+data)
    }
    catch(erro){
        console.log("Error "+erro.message);}
}

//create data
exports.register = async(req,res)=>{
    try{
        const inputdata=req.body;
        const comment_id = inputdata.comment_id;
        console.log('comment_id',comment_id);
        const activeuser = await userservice.findbycomment_id(comment_id);
        if(activeuser){
            res.status(500).json({message : "post already exist"});
        }
        else{
            const createdata = await userservice.createuser(inputdata)
            res.status(200).json({
                message:'success', data: createdata
        })

        }
    }
    catch(error){
        res.status(500).json({message:"fail"})
    }
    
}
