const jwt = require('jsonwebtoken');

const createToken = ({payload}) => {
    return jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_LIFETIME}
    )
}

const verifyToken = ({token}) => jwt.verify(token, process.env.JWT_SECRET)

const attachCookiesToResponse = ({res, payload}) => {
    const token = createToken({payload})
    console.log(token)
    return res.cookie(
        'access_token',
        token,
        {
            httpOnly: true,
            expires: new Date(Date.now() + 900000),
            secure: process.env.NODE_ENV === 'production',
            signed: true,
        }
    )
}

module.exports = {
    createToken,
    verifyToken,
    attachCookiesToResponse
} 