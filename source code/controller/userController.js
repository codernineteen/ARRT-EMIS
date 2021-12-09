const User = require('../models/User');
const {StatusCodes} = require('http-status-codes');
const CustomError = require('../errors');

const getAdmin = async(req, res) => {
    res.send('getAdmin')
}

const updateAdmin = async(req, res) => {
    res.send('updateAdmin')
}

module.exports = {
    getAdmin,
    updateAdmin
}