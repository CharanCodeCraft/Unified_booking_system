const mongoose = require("mongoose");
const User = require("./userschema");

const bookingSchema = new mongoose.Schema({
    showTime: {
        type: String,
        required: true,
    },
    showDate: {
        type: String,
        required: true,
    },
    movieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
        required: true,
    },
    screenId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
        required: true,
    },
    seats:[
        {
            row: {
                type: String,
                required: true
            },
            col: {
                type: Number,
                required: true
            },
            seat_id: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }
    ],
    totalPrice:{
        type: Number,
        required: true
    },
    paymentId: {
        type: String,
        required: true
    },
    paymentType: {
        type: String,
        required: true
    },
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;