const jwt  = require("jsonwebtoken");
require('dotenv').config()
function checkauthtoken(req,res,next){
    const authtoken=req.cookies.authtoken;
    const refreshtoken=req.cookies.refreshtoken;
    if(!authtoken || !refreshtoken){
        return res.status(400).json({
            ok:false,
            message:'user is not logged in'
        })
    }
    jwt.verify(authtoken,process.env.JWT_SECRET_KEY,(err,decoded)=>{
        if(err){
            jwt.verify(refreshtoken,process.env.JWT_REFRESH_SECRET_KEY,(referr,refdecoded)=>{
                if(referr){
                    return res.status(400).json({
                        ok:false,
                        message:'both token are invalid'
                    })
                }
                else{
                    const newauthtoken= jwt.sign({userid:refdecoded.userid},process.env.JWT_SECRET_KEY,{expiresIn:'10m'});
                    const newrefreshtoken= jwt.sign({userid:refdecoded.userid},process.env.JWT_REFRESH_SECRET_KEY,{expiresIn:'1d'});
                    res.cookie('authtoken',newauthtoken,{httpOnly:true});
                    res.cookie('refreshtoken',newrefreshtoken,{httpOnly:true});
                    req.userid=refdecoded.userid
                    next()
                }
            })
        }
        else{
            req.userid=decoded.userid
            next()
        }
    })
}
module.exports=checkauthtoken