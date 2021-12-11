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
//path
const path = require('path');
const { appendFile } = require('fs');
//authMiddleware
const {authentication, authorizePermission} = require('./middleware/authenticate')

//template engine
app.set('view engine', 'ejs')

//middlewares
//log
app.use(morgan('dev'));
//data format, static assets
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
//passport and session
app.use(cookieParser(process.env.JWT_SECRET));
//image upload
app.use(fileUploader());

//--routes
//home
app.get('/', (req, res) => {
    res.send('home')
})
//login
app.use('/auth', authRouter)
app.get('/auth/login', (req, res) => {
    res.sendFile(path.join(__dirname, './public/login.html'));
});
app.use('/user', userRouter)
//product
app.get('/products' , (req, res) => {
    res.render('products')
})
app.get('/products/create', 
    authentication, 
    authorizePermission('devADMIN'),
    (req, res) => {
        res.sendFile(path.join(__dirname, './public/product-create.html'))
    }
)
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
