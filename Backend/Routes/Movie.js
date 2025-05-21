const express=require('express')
const router=express.Router()

const Movie=require('../Models/MovieSchema')
const User=require('../Models/userschema')
const Booking=require('../Models/BookingSchema')
const Screen=require('../Models/ScreenSchema')

const errorHandler = require('../Middlewares/errormiddleware')
const authTokenHandler= require('../Middlewares/authmiddleware')
const adminTokenHandler = require('../Middlewares/adminmiddleware')

function createResponse(ok,message,data){
    return {
        ok,
        message,
        data,
    }
}

//admin
router.get('/test',async (req,res)=>{
    res.json({
        message:"Movie api is working"
    })
})
router.post('/createmovie',adminTokenHandler,async(req,res,next)=>{

})
router.post('/addcelebtomovie',adminTokenHandler,async(req,res,next)=>{
    
})
router.post('/createscreen',adminTokenHandler,async(req,res,next)=>{
    
})
router.post('/addmoviescheduletoscreen',adminTokenHandler,async(req,res,next)=>{
    
})

//user
router.post('/bookticket',authTokenHandler,async(req,res,next)=>{
    
})
router.get('/getmovies',async(req,res,next)=>{
    
})
router.get('/getscreens',async(req,res,next)=>{
    
})
   

router.use(errorHandler)
module.exports=router   