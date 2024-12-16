const express=require("express")


function getAllTasks(req,res){
    res.send("hi there")
}

const createTask=(req,res)=>{
    res.send("Uour task is created")
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