const express=require("express")
const tasks=require("../models/tasks")

const getAllTasks=async(req,res)=>{
    try{
        const task=await tasks.find({});
        res.status(200).json({task});
    }catch(error){
       res.status(500).json({error}) 
    }
}

const createTask=async (req,res)=>{
    try{
    const task1=await tasks.create(req.body)
    res.status(201).json({task1});
    }catch(error){
        res.status(500).json({"msg":error})
    }

}
const getTask=async(req,res)=>{
    try{
        let nam=req.body.name;
        const gtask=await tasks.findOne({name:nam});
        console.log(nam);
        console.log(gtask)
        res.status(200).json({msg:gtask})
    }catch{
        res.status(404).json({msg:"give task cannot be found"}) 
    }
}
    

const deleteTask=(req,res)=>{
    res.send("your task is deleyed successfully")
}

const updateTask=(req,res)=>{
    res.send("Your post has been updated sucessfully")
}



module.exports={
    getAllTasks,getTask,createTask,updateTask,deleteTask
}

//post,get(single),patch(single),delete