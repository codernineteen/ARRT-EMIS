const User = require('../models/User');
const {StatusCodes} = require('http-status-codes');
const CustomError = require('../errors');
const passport = require('passport');

const registerAdmin = async(req, res, next) => {
    const {name, email, password, role} = req.body;
    if(!name || !email || !password || !role) {
        return res.status(StatusCodes.BAD_REQUEST).json({msg: "모든 정보를 입력해야하야합니다."})
    }
    const user = await User.create(req.body)
    res.status(StatusCodes.CREATED).json({user})
    next();
}

const login = (req, res) => {
    const isLoginSuccess = passport.authenticate(
        "local", 
        { failureRedirect: "/login", successRedirect: "/" }
    )
    if(!isLoginSuccess) {
        throw new CustomError.Unauthorized('이메일 혹은 비밀번호가 일치하지 않습니다.')
    }
    res.status(StatusCodes.OK).json({msg: 'login success'})
}

module.exports = {
    registerAdmin,
    login
}