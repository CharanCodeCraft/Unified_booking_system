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
        const {title,description,portraitImgUrl,landscapeImgUrl,rating,genre,duration}=req.body;
        const newMovie=new Movie({title,description,portraitImgUrl,landscapeImgUrl,rating,genre,duration});
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
    try {
        const{showTime,showDate,movieId,screenId,seats,totalPrice,paymentId,paymentType }= req.body;

        //creating a function to verify payment id

        const screen=await Screen.findById(screenId);
        if(!screen){
            return res.status(404).json({
                ok:false,
                message:'Screen does not exist'
            });
        }

        const movieSchedule = screen.movieSchedules.find(schedule => {
            console.log(schedule);
            let showDate1 = new Date(schedule.showDate);
            let showDate2 = new Date(showDate);
            if (showDate1.getUTCDay() === showDate2.getUTCDay() &&
                showDate1.getUTCMonth() === showDate2.getUTCMonth() &&
                showDate1.getUTCFullYear() === showDate2.getUTCFullYear() &&
                schedule.showTime === showTime &&
                schedule.movieId == movieId) {
                return true;
            }
            return false;
        });
        if(!movieSchedule){
            return res.status(404).json({
                ok:false,
                message:'Movie schedule does not exist'
            });
        }

        const user=await User.findById(req.userid);
        if(!user){
            return res.status(404).json({
                ok:false,
                message:'User does not exist'
            });
        }

        const newBooking=new Booking({UserId:req.userid,showTime,showDate,movieId,screenId,seats,totalPrice,paymentId,paymentType});
        await newBooking.save();
        
        movieSchedule.notAvailableSeats.push(...seats);
        
        await screen.save();
        
        user.bookings.push(newBooking._id);
        await user.save();
        
        return res.status(201).json({
            ok:true,
            message:'Ticket booked successfully',
            
        });


    } catch (err) {
        next(err);
    }
})
router.get('/movies',async(req,res,next)=>{
    try {
         const movies = await Movie.find();

        //returning the list of movies as JSON response
        res.status(200).json({
            ok: true,
            data: movies,
            message: 'Movies retrieved successfully'
        });
        
    } catch (err) {
        next(err);
        
    }
})
router.get('/movies/:id', async (req, res, next) => {
    try {
        const movieId = req.params.id;
        const movie = await Movie.findById(movieId);
        if (!movie) {
            
            return res.status(404).json({
                ok: false,
                message: 'Movie not found'
            });
        }

        res.status(200).json({
            ok: true,
            data: movie,
            message: 'Movie retrieved successfully'
        });
    }
    catch (err) {
        next(err);
    }
})
router.get('/screens/:id', async (req, res, next) => {
    try {
        const movieId = req.params.id;
        const movie = await Screen.findById(movieId);
        if (!movie) {
            
            return res.status(404).json({
                ok: false,
                message: 'screen not found'
            });
        }

        res.status(200).json({
            ok: true,
            data: movie,
            message: 'screen retrieved successfully'
        });
    }
    catch (err) {
        next(err);
    }
})
router.get('/screensbycity/:city',async(req,res,next)=>{
    try {
        const city=req.params.city;
        console.log(city);
        const screens=await Screen.find({city});
        if(!screens || screens.length===0){
            return res.status(404).json(createResponse(false,'screens not found'))
        }

        res.status(200).json(createResponse(true,'screens retrieved successfully',screens));
    } catch (err) {
        next(err);
    }
})
router.get('/screens/:city/:date/:movieid',async(req,res,next)=>{
    try {
        console.log(req.params);
        const {city,date,movieid}=req.params;
        const screens=await Screen.find({city});
        console.log(screens);
        if(!screens || screens.length===0){
            return res.status(404).json(createResponse(false,'screens not found for the city'))
        }
        const screenSet = new Set();
        let temp=[]
        const screen=screens.forEach(screen=>screen.movieSchedules.forEach(schedule=>{
            let scheduleDate=new Date(schedule.showDate);
            let userdate=new Date(date);
            console.log(scheduleDate,userdate);
            if(scheduleDate.getUTCDate() === userdate.getUTCDate() &&
            scheduleDate.getUTCMonth() === userdate.getUTCMonth() &&
            scheduleDate.getUTCFullYear() === userdate.getUTCFullYear()&& schedule.movieId==movieid && !screenSet.has(screen._id)){
                screenSet.add(screen._id);
                temp.push(screen)
            }
        }));
        console.log(temp);
        if(!temp || temp.length===0
        ){
            return res.status(404).json(createResponse(false,'screen not found'))
        }
        res.status(200).json(createResponse(true,'screens retrieved successfully',temp));
    } catch (err) {
        next(err);
    }
})
router.get('/schedules/:screenid/:date/:movieid',async(req,res,next)=>{
    try {
        // console.log(req.params);
        const {screenid,date,movieid}=req.params;
        const screen=await Screen.findById(screenid);
        if(!screen){
            return res.status(404).json(createResponse(false,'screen not found'))
        }
        const schedule=screen.movieSchedules.filter(schedule=>{
            let scheduleDate=new Date(schedule.showDate);
            let userdate=new Date(date);
            console.log(scheduleDate,userdate);
            console.log(scheduleDate.getDate(),userdate.getDate() );
            if( scheduleDate.getUTCDate() === userdate.getUTCDate() &&
            scheduleDate.getUTCMonth() === userdate.getUTCMonth() &&
            scheduleDate.getUTCFullYear() === userdate.getUTCFullYear()&& schedule.movieId==movieid){
                return true
            }
            else{
                return false
            }
        });
        console.log(schedule);
        if(!schedule){
            return res.status(404).json(createResponse(false,'schedule not found'))
        }
        res.status(200).json(createResponse(true,'schedule retrieved successfully',{
            screen,
            movieschedulefordate:schedule
        }));
    } catch (err) {
        next(err);
    }
})
router.get('/getuserbookings' , authTokenHandler , async (req , res , next) => {
    try {
        const user = await User.findById(req.userid).populate('bookings');
        if(!user){
            return res.status(404).json(createResponse(false, 'User not found', null));
        }

        let bookings = [];
        for(let i = 0 ; i < user.bookings.length ; i++){
            let bookingobj = await Booking.findById(user.bookings[i]._id);
            bookings.push(bookingobj);
        }

        res.status(200).json(createResponse(true, 'User bookings retrieved successfully', bookings));
        
    } catch (err) {
        next(err); 
    }
})

router.get('/getuserbookings/:id' , authTokenHandler , async (req , res , next) => {
    try {
        const bookingId = req.params.id;
        const booking = await Booking.findById(bookingId);

        if(!booking){
            return res.status(404).json(createResponse(false, 'Booking not found', null));
        }

        res.status(200).json(createResponse(true, 'Booking retrieved successfully', booking));
    } catch (err) {
        next(err);
    }
})


router.use(errorHandler)
module.exports=router   