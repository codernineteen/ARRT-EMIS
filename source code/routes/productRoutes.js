const express = require('express');
const router = express.Router();
const {authentication, authorizePermission} = require('../middleware/authenticate')

const {
    getAllProduct,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    imageUpload
} = require('../controller/productController');


router.route('/')
    .get(getAllProduct)
    .post(authentication, authorizePermission('devADMIN'), createProduct)

router.route('/uploads')
    .post(authentication, authorizePermission('devADMIN'), imageUpload)

router.route('/:id')
    .get(getSingleProduct)
    .patch(authentication, authorizePermission('devADMIN'), updateProduct)
    .delete(authentication, authorizePermission('devADMIN'), deleteProduct)

module.exports = router