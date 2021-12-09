const express = require('express');
const router = express.Router();
const passport = require('passport');

const {
    registerAdmin,
    login
} = require('../controller/authController')

router.post('/register', registerAdmin);
router.post('/login', login)

module.exports = router