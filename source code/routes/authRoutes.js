const express = require('express');
const router = express.Router();

const {
    registerAdmin,
    login,
    logout
} = require('../controller/authController')

router.post('/register', registerAdmin);
router.post('/login', login);
router.get('/logout', logout);

module.exports = router