module.exports=errorHandler;

function errorHandler(err,req,res,next) {
    if(err.name==="UnauthorizedError"){
        return res.status(400).json({
            message:"Token not found"
        })
    }

    return res.status(500).json({
        message:err.message
    })
    
}