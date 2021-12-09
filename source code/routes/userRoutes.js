const express = require('express');
const router = express.Router();

const {
    getAdmin,
    updateAdmin
} = require('../controller/userController');

router.route('/:id').get(getAdmin).patch(updateAdmin);

module.exports = router;