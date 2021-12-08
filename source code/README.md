## Arrt`emis project

### Page outline

- Home
- product overview
- product detail page
- product size pop-up
- community (notice, Q&A)
- archive (lookbook, video)

### Main function outline

- search
- video
- pop-up

### Design feature

- grid ( Arrangement of product and lookbood )
- Same nav-bar whole page
- background shadow when user search and clikc pop-up
- slide

### Back-end check list

#### Setup basic server

- [x] import express and assign to variable
- [x] setup start port variable (5000) and start function

#### Setup Basic Express Server

- [x] import express and assign to variable
- [x] setup start port variable (5000) and start function

#### Connect To DB

- [x] get connection string
- [x] setup .env with MONGO_URL variable and assign the value
- [x] import 'dotenv' and setup package
- [x] import connect() and invoke in the starter
- [x] restart the server
- [x] mongoose V6 info

#### Basic Routes and Middleware

- [x] setup / GET Route
- [x] setup express.json() middleware
- [x] setup 404 and errorHandler middleware
- [x] import 'exress-async-errors' package

#### 404 vs ErrorHandler Middleware

#### Morgan Pacakge

- [Morgan Package](https://www.npmjs.com/package/morgan)

#### User model - admin only

#### Auth Routes Structure

- [x] create controllers folder
- [x] add authController file
- [x] export (register,login,logout) functions
- [x] res.send('some string value')
- [x] create routes folder
- [x] setup authRoutes file
- [x] import all controllers
- [x] setup three routes
- [x] post('/register') post('/login') get('/logout')
- [x] import authRoutes as authRouter in the app.js
- [x] setup app.use('/api/v1/auth', authRouter)

#### Handle Password

- [x] UserSchema.pre('save') - hook
- this points to User
- bcrypt.genSalt - number of rounds
- bcrypt.hash

#### JWT

- [x] require 'jsonwebtoken' package
- [x] create jwt - jwt.sign(payload,secret,options)
- [x] verify jwt - jwt.verify(token,secret)
- [x] add variables in .env JWT_SECRET=jwtSecret and JWT_LIFETIME=1d
- [x] restart the server !!!!
- [x] refactor code, create jwt functions in utils
- [x] refactor cookie code
- [x] setup func attachCookiesToResponse
- [x] accept payload(res, tokenUser)
- [x] create token, setup cookie
- [] optionally send back the response

#### Login Route

- [x] check if email and password exist, if one missing return 400
- [x] find user, if no user return 401
- [x] check password, if does not match return 401
- [x] if everything is correct, attach cookie
      and send back the same response as in register

#### Logout Route

- [x] set token cookie equal to some string value
- [x] set expires:new Date(Date.now())

#### User Routes Structure

- [x] add userController file
- [x] export (getAllUsers,getSingleUser,showCurrentUser,updateUser,updateUserPassword) functions
- [x] res.send('some string value')
- [x] setup userRoutes file
- [x] import all controllers
- [] setup just one route - router.route('/').get(getAllUsers);
- [x] import userRoutes as userRouter in the app.js
- [x] setup app.use('/api/v1/users', userRouter)

#### Authenticate User Setup

#### Auth User Complete

#### Authorize Permissions Setup

- [x] hardcode

#### Authorize Permissions Complete

- [x] introduce params

#### createTokenUser in Utils

- [x] create a file in utils (createTokenUser)
- [x] setup a function that accepts user object and returns userToken object
- [x] export as default
- [x] setup all the correct imports/exports and refactor existing code

#### Setup and Apply checkPermissions()
