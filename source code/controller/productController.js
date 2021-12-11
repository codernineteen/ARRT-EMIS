const Product = require('../models/Product');
const {StatusCodes} = require('http-status-codes');
const CustomError = require('../errors');


const createProduct = async (req, res) => {
    const product = await Product.create(req.body)
    console.log(req.files);
    res.status(StatusCodes.CREATED).json({product})
}

const getAllProduct = async (req, res) => {
    const products = await Product.find({})
    res.status(StatusCodes.OK).json({products})
}

const getSingleProduct = async (req, res) => {
    const product = await Product.findById(req.params.id)
    if(!product) {
        throw new CustomError.NotFound("No item with that id")
    }
    res.status(StatusCodes.OK).json({product})
}

const updateProduct = async (req, res) => {
    const product = await Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
    if(!product) {
        throw new CustomError.NotFound("No item with that id")
    }
    res.status(StatusCodes.OK).json({product})
}

const deleteProduct = async (req, res) => {
    //how bout find one and .remove() ?
    const product = await Product.findOneAndDelete({_id: req.params.id})
    if(!product) {
        throw new CustomError.NotFound("No item with that id")
    }
    res.status(StatusCodes.OK).json({product});
}

module.exports = {
    getAllProduct,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct
}