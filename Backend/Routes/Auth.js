const express = require('express');
const router = express.Router(); 
const User = require('../Models/userschema');
const errorhandler = require('../Middlewares/errormiddleware');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authhandler=require('../Middlewares/authmiddleware')
require('dotenv').config() 

router.get('/test',(req,res)=>{
    res.json({
        message:"api is working"
    });
})

router.post('/register',async(req,res,next)=>{
    try{
        const {name,email,password}=req.body;
        const user=await User.findOne({email});
        if(user){
            return res.status(400).json(createres(false,'user already exists'))
        }
        const newUser=new User({name,email,password});
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
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json(createres(false,'user does not exist'))
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json(createres(false,'invalid credentials'))
        }
        const authtoken= jwt.sign({userid:user._id},process.env.JWT_SECRET_KEY,{expiresIn:'10m'});
        const refreshtoken= jwt.sign({userid:user._id},process.env.JWT_REFRESH_SECRET_KEY,{expiresIn:'1d'});
        res.cookie('authtoken',authtoken,{httpOnly:true});
        res.cookie('refreshtoken',refreshtoken,{httpOnly:true});
        return res.status(200).json(createres(true,'user logged in successfully',{
            authtoken,
            refreshtoken
        }))
    }
    catch(err){
        next(err)
    }
})
router.get('/checklogin',authhandler,async(req,res)=>{
    res.json({
        userid:req.userid,
        ok:true,
        message:'user is logged in'
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