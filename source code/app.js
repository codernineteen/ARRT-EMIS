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
const productRouter = require('./routes/productRoutes');
const noticeRouter = require('./routes/noticeRoutes');
const archiveRouter = require('./routes/archiveRoutes');
//security;
const cookieParser = require('cookie-parser');
//image uploader
const fileUploader = require('express-fileupload');

//middlewares
//log
app.use(morgan('dev'));
//data format
app.use(express.json());
//passport and session
app.use(cookieParser(process.env.JWT_SECRET));
//image upload
app.use(fileUploader());

//routes
app.get('/', (req, res) => {
    res.send('home')
})

app.use('/user', userRouter)
app.use('/auth', authRouter)
app.use('/products', productRouter)
app.use('/notice', noticeRouter)
app.use('/archives', archiveRouter)


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
