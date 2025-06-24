const express = require('express')
const app = express()
const port = 8000
require('./db')
require('dotenv').config()


const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const Razorpay = require('razorpay');

const authRouter = require('./Routes/Auth')
const adminRouter = require('./Routes/admin')
const movieRoutes = require('./Routes/Movie')
const imageroute = require('./Routes/imageUploadRoutes')
const paymentroute = require('./Routes/payment')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const allowedOrigins = [process.env.FRONTEND_ADMIN_URL,process.env.FRONTEND_URL]; // Add more origins as needed
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true,
    })
);
app.use(cookieParser());

app.use('/auth', authRouter)
app.use('/admin', adminRouter)
app.use('/movie', movieRoutes)
app.use('/image', imageroute)
app.use('/payment', paymentroute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})