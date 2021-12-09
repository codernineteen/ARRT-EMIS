const CustomErrors = require('./customError');
const { StatusCodes } = require('http-status-codes');

class NotFound extends CustomErrors{
    constructor(message) {
        supser(message);
        this.statusCode = StatusCodes.NOT_FOUND;
    }
}

module.exports = NotFound;