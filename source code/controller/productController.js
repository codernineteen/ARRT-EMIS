const Product = require('../models/Product');
const {StatusCodes} = require('http-status-codes');
const CustomError = require('../errors');


const createProduct = async (req, res) => {
    const {partImages, totalImages} = req.files;
    if(!req.files || Object.keys(req.files).length === 0) {
        throw new CustomErrors.BadRequestError('No files were uploaded');
    }
    let partImagesPaths = [];
    let totalImagesPaths = [];
    for (let image of partImages) {
        partImagesPaths.push(image.path)
    }
    for (let image of totalImages) {
        totalImagesPaths.push(image.path)
    }
    console.log(req.body)
    const newProduct = {
        name : req.body.name, 
        color: req.body.color, 
        design: req.body.design, 
        material: req.body.material, 
        origin: req.body.origin, 
        price: req.body.price, 
        category: req.body.category,
        partImages: partImagesPaths,
        totalImages: totalImagesPaths
    }
    const product = await Product.create(newProduct)
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