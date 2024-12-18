const notFound=(req,res)=>
    res.status(500).json({msg:"Sorry bRO,Route not found."})


module.exports=notFound 