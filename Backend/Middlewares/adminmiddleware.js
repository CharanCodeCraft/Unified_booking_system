const jwt = require('jsonwebtoken');
require('dotenv').config()
function adminauthcheck(req,res,next){
    const adminauthtoken=req.cookies.adminauthtoken;
    if(!adminauthtoken){
        return res.status(400).json({
            ok:false,
            message:'user is not logged in'
        })
    }
    jwt.verify(adminauthtoken,process.env.JWT_ADMIN_SECRET_KEY,(err,decoded)=>{
        if(err){
            return res.status(400).json({
                ok:false,
                message:'token is invalid'
            })
        }
        else{
            req.adminid=decoded.userid
            next()
        }

    })
}
module.exports=adminauthcheck