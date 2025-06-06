const express = require('express')
const app = express()
const port = 8000
require('./db')
require('dotenv').config()


const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRouter = require('./Routes/Auth')
const adminRouter = require('./Routes/admin')
const movieRoutes = require('./Routes/Movie')

app.use(bodyParser.json());
const allowedOrigins = ['http://localhost:3000','http://localhost:3001']; // Add more origins as needed
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true, // Allow credentials
    })
);
app.use(cookieParser());

app.use('/auth', authRouter)
app.use('/admin', adminRouter)
app.use('/movie', movieRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})