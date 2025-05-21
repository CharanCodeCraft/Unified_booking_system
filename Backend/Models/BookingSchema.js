const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    showTime: {
        type: String,
        required: true,
    },
    showDate: {
        type: String,
        required: true,
    },
    movieid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
        required: true,
    },
    theatreid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
        required: true,
    },
    seats:[
        {
            seat_id:{
                type: String,
                required: true
            },
            type:String,
            status:String
        }
    ],
    totalprice:{
        type: Number,
        required: true
    }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;