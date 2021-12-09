const express = require('express');
const router = express.Router();

const {
    registerAdmin,
    login
} = require('../controller/authController')

router.post('/register', registerAdmin, login);
router.post('/login', login)

module.exports = router