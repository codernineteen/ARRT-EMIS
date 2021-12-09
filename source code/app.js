require('dotenv').config()
require('express-async-errors');
const express = require('express');
const app = express();

//databse
const connectDB = require('./db/connectDB');
//log
const morgan = require('morgan');
//errors
const notFoundErrorMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
//router
const userRouter = require('./routes/userRoutes');
const authRouter = require('./routes/authRoutes');
//security;
const cookieParser = require('cookie-parser');

//middlewares
//log
app.use(morgan('dev'));
//data format
app.use(express.json());
//passport and session
app.use(cookieParser());

//routes
app.get('/', (req, res) => {
    res.send('home')
})

app.use('/user', userRouter)
app.use('/auth', authRouter)

app.use(notFoundErrorMiddleware);
app.use(errorHandlerMiddleware);





const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server listening`))
    } catch(err) {
        console.log(err)
    }
}

start();
