const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/product_manager",{useNewUrlParser:true}, (errs)=>errs?console.log(errs):console.log('db: product_manager'))

console.log('* ** *** models.js');


ProductSchema = new mongoose.Schema({
    // used to be title
    name: { 
        type:String,
        required: [true, "product name field must have at least 3 characters"],
        minlength: 3
    },
    qty: {
        type: Number,
        required: [true,"product quantity field must be greater than 0"],
        min: 1
    },

    price: {
        required: [true,"price field must be greater than 0"],
        type: Number,
        min: 1

    }
}, {timestamps:true})


module.exports = mongoose.model('Product', ProductSchema)