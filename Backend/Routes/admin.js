const express = require('express');
const router = express.Router(); 
const Admin=require('../Models/adminschema')
const errorhandler = require('../Middlewares/errormiddleware');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const adminauthcheck=require('../Middlewares/adminmiddleware')
require('dotenv').config()
router.post('/register',async(req,res,next)=>{
    try{
        const {name,email,password,code}=req.body;
        if(code!==process.env.SECRET_CODE){
            return res.status(400).json(createres(false,'invalid code'))
        }
        const user=await Admin.findOne({email});
        if(user){
            return res.status(400).json(createres(false,'user already exists'))
        }
        const newUser=new Admin({name,email,password});
        await newUser.save();
        return res.status(200).json(createres(true,'user registered successfully'))
    }
    catch(err){
        next(err)
    }
})
router.post('/login',async(req,res,next)=>{
    try{
        const {email,password}=req.body;
        const user=await Admin.findOne({email});
        if(!user){
            return res.status(400).json(createres(false,'user does not exist'))
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json(createres(false,'invalid credentials'))
        }
        const adminauthtoken= jwt.sign({userid:user._id},process.env.JWT_ADMIN_SECRET_KEY,{expiresIn:'1d'});
        res.cookie('adminauthtoken',adminauthtoken,{httpOnly: true,
            secure: true,         // Required for cross-site cookies (in production)
            sameSite: 'None',});
        return res.status(200).json(createres(true,'user logged in successfully',{adminauthtoken}))
    }
    catch(err){
        next(err)
    }
})
router.get('/logout',async(req,res)=>{
    res.clearCookie('authtoken');
    res.clearCookie('refreshtoken');
    return res.status(200).json(createres(true,'user logged out successfully'))
})
router.get('/checklogin',adminauthcheck,async(req,res)=>{
    res.json({
        adminid:req.adminid,
        ok:true,
        message:'admin is logged in'
    })
    
})
function createres(ok,message,data){
    return {
        ok,
        message,
        data
    }
}
router.use(errorhandler)
module.exports=router