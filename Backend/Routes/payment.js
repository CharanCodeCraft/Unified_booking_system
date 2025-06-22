const express=require('express')
const router=express.Router()
const Razorpay = require('razorpay');
const crypto=require('crypto');
const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });
router.post('/process',async(req,res)=>{
    const options={
        amount: req.body.amount*100,
        currency: "INR",
        receipt: "order_rcptid_11"
    }
    const order=await instance.orders.create(options);
    if(!order){
        return res.status(500).json({
            ok:false,
            message:"Something went wrong"
        })
    }
    res.json({
        ok:true,
        message:"Payment is Done",
        order
    })
})

router.get('/getkey',async(req,res)=>{
    res.json({
        key:process.env.RAZORPAY_API_KEY
    })
})

router.post('/verify',async(req,res)=>{
    const {razorpay_payment_id,razorpay_order_id,razorpay_signature}=req.body;
    const secret=process.env.RAZORPAY_API_SECRET;
    const shasum=crypto.createHmac('sha256',secret);
    shasum.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const digest=shasum.digest('hex');
    if(digest!==razorpay_signature){
        return res.status(400).json({
            ok:false,
            message:"Payment Failed"
        })
    }
    res.json({
        ok:true,
        message:"Payment Successful",
        razorpay_payment_id,
    })
})
module.exports=router