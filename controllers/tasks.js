const tasks=require("../models/tasks")

const async=require("../middleware/async");

const getAllTasks= asyncWrapper(async(req,res)=>{
    try{
        const task=await tasks.find({});
        res.status(200).json({task});
    }catch(error){
       res.status(500).json({error}) 
    }
})

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
       let { id:taskId }=req.params;
       const p=await tasks.findOne({_id:taskId})
       if(!p){
        res.status(400).json({msg:`task not found with id: ${taskId}`})
       }
       res.status(200).json({msg:p})
       }
       catch(error){
        res.status(500).json({msg:error})
       }
    }

    

const deleteTask=async (req,res)=>{
    try{
        const {id:taskId}=req.params;
        const dtask=await tasks.findOneAndDelete({_id:taskId});
        if(!dtask){
            res.status(400).json({msg:`SooryBro,We cannot find yor task with id:${taskId}`})
        }
        res.status(200).json({dtask})
    }
    catch(e){
        res.status(500).json({msg:error})
    }
}

const updateTask=async (req,res)=>{
    try{
        const {id:taskId} =req.params;
        const utask=await tasks.findOneAndUpdate({_id:taskId},req.body,{
            new:true,runValidators:true
        })
        if(!utask){
            res.send(400).json(`Task is not present with id:${taskId}`)
        }
        res.status(200).json({utask})
    } catch(error){
        res.status(500).json({msg:error})
    }  
}



module.exports={
    getAllTasks,getTask,createTask,updateTask,deleteTask
}
