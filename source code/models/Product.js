const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, 'name needed'],
        maxlength: 20 
    },
    color : {
        type: [String],
        required: [true, 'color needed'],
        
    },
    design : {
        type: [String],
        required: [true, 'design needed'],
    },
    material : {
        type: [String],
        required: [true, 'material needed'],
    },
    origin : {
        type: String,
        default: "KOREA"
    },
    price : {
        type: Number,
        required: [true, "price needed"]
    },
    partImage : {
        type: [String]
    },
    totalImage : {
        type: [String]
    },
    category: {
        type: String,
        enum: ["top", "hats", "others"],
        default: "others"
    }

}, {timestamps: true});



module.exports = mongoose.model('Product', ProductSchema)