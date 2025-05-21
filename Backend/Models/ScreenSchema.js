const mongoose = require('mongoose');

const screenSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    seats: {
        type: Array,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    screenType: {
        type: String, 
        required: true
    },
    movieSchedules: [
        {
            movieId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Movie', 
                required: true
            },
            showTime: String,
            notAvailableSeats: [{
               
                row : String,
                col : Number,
                seat_id : String,
                price : Number
                
            }],
            showDate: Date
        }
    ]
});

const Screen = mongoose.model('Screen', screenSchema);

module.exports = Screen;