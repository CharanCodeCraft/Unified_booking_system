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
    try{
        const {title,description,portraitImgUrl,landscapeImgUrl,genre,duration}=req.body;
        const newMovie=new Movie({title,description,portraitImgUrl,landscapeImgUrl,genre,duration});
        await newMovie.save();
        return res.status(200).json(createResponse(true,'movie created successfully'))
    }
    catch(err){
        next(err)
    }
})
router.post('/addcelebtomovie',adminTokenHandler,async(req,res,next)=>{
    try{
        const {movieId,celebType,celebName,celebRole,celebImage}=req.body;
        const movie=await Movie.findById(movieId);
        if(!movie){
            return res.status(400).json(createResponse(false,'movie does not exist'))
        }
        const newceleb={
            celebType,
            celebName,
            celebRole,
            celebImage
        }
        if(celebType==="cast")
            movie.cast.push(newceleb);
        if(celebType==="crew")
            movie.crew.push(newceleb);
        await movie.save();
        return res.status(200).json(createResponse(true,'celeb added to movie successfully'))
    }
    catch(err){
        next(err)
    }
})
router.post('/createscreen',adminTokenHandler,async(req,res,next)=>{
    try{
        const {name,location,seats,city,screenType}=req.body;
        const newscreen=new Screen({name,location,seats,city,screenType});
        await newscreen.save();
        return res.status(200).json(createResponse(true,'screen created successfully'))
    }
    catch(err){
        next(err)
    }
})
router.post('/addmoviescheduletoscreen',adminTokenHandler,async(req,res,next)=>{
    try{
        const {screenId,movieId,showTime,showDate}=req.body;
        const screen=await Screen.findById(screenId);
        if(!screen){
            return res.status(400).json(createResponse(false,'screen does not exist'))
        }
        screen.movieSchedules.push({movieId,showTime,showDate,notAvailableSeats:[]});
        await screen.save();
        return res.status(200).json(createResponse(true,'movie schedule added to screen successfully'))
    }
    catch(err){
        next(err)
    }
    
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