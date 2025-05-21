function errorhandler(statuscode,err,req,res,next){
    if(res.headerSent){
        return next(err)
    }

    res.status(statuscode||500).json({
        ok:false,
        message:err.message
    })
}

module.exports=errorhandler