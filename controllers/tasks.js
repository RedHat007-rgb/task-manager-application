const express=require("express")
const tasks=require("../models/tasks")

const getAllTasks=(req,res)=>{
    res.send("fetched all tasks")
}

const createTask=async (req,res)=>{
    try{
    const task1=await tasks.create(req.body)
    res.status(201).json({task1});
    }catch(error){
        res.status(500).json({"msg":error})
    }

}
    

    


const deleteTask=(req,res)=>{
    res.send("your task is deleyed successfully")
}

const updateTask=(req,res)=>{
    res.send("Your post has been updated sucessfully")
}

const getTask=(req,res)=>{
    res.send(" task is  fetched.")
}

module.exports={
    getAllTasks,getTask,createTask,updateTask,deleteTask
}

//post,get(single),patch(single),delete