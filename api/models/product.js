const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String, required: true
    },
    price: {
        type: Number, required: true
    },
    img: {
        data: Buffer, type: String, required: true
    },
    model: {
        type: String, required: true
    },
    cpu: {
        type: String, required: true
    },
    manufacturer: {
        type: String, required: true
    }
})

module.exports = mongoose.model('Product', productSchema)