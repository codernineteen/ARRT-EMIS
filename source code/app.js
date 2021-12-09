require('dotenv').config()
require('express-async-errors');
require('./utils/passport')
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
const session = require('express-session');
// const MongoStore = require('connect-mongo');
// const tokenStore = new MongoStore(session);
const passport = require('passport')


//middlewares
//log
app.use(morgan('tiny'));
//data format
app.use(express.json());
//cookie parser
// app.use(cookieParser());
//passport and session
app.use(
    session(
        { 
            secret: process.env.SESSION_SECRET,
            resave: true, 
            saveUninitialized: false 
        }
    )
); 
app.use(passport.initialize()); 
app.use(passport.session());


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
