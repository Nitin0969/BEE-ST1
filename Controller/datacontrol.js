const userData = require('../model/postSchema');
const express = require ('express');
// const userData =require ('../model/postSchema');
const userservice = require('../Services/postservices')


// delete the data
exports.deletepost=async(req,res)=>{
    try{
        const user=await userData.findOneAndDelete({post_id:req.body.post_id});
        res.send("data delete succesfully "+user);     
    }
    catch(erro){
        console.log("Error "+erro.message);
    }
    }

    // update the data
    exports.updatepost = async(req,res)=>{
        try{
         const user=await userData.findOneAndUpdate({post_id:req.body.post_id},{post_title:req.body.post_title,},{new:true});
         res.send("update succesfully "+user);     
     }
     catch(erro){
         console.log("Error "+erro.message);
     }
 }
//  get data

exports.getdata=async(req,res)=>{
    try{
        const data = await userData.findOne({post_id:req.body.post_id});
        res.send("data"+data)
    }
    catch(erro){
        console.log("Error "+erro.message);}
}

//create data
exports.register = async(req,res)=>{
    try{
        const inputdata=req.body;
        const post_id = inputdata.post_id;
        console.log('post_id',post_id);
        const activeuser = await userservice.findbypost_id(post_id);
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
