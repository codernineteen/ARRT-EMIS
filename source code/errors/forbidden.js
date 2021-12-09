const CustomErrors = require('./customError');
const { StatusCodes } = require('http-status-codes');

class Forbidden extends CustomErrors{
    constructor(message) {
        supser(message);
        this.statusCode = StatusCodes.FORBIDDEN;
    }
}

module.exports = Forbidden;