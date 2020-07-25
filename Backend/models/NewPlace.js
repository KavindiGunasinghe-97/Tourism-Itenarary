const mongoose = require('mongoose')

const newPlaceSchema = new mongoose.Schema({
    txtName: {
        type: String,
        required: true
    },
    txtEmail: {
        type: String,
        required: true,
        unique: true,
    },
    txtHighlight: {
        type: String,
        required: true
    },
    txtMsg: {
        type: String,
        required: true,

    },
    txtPhone: {
        type: String,
        required: true
    },

    txtPrice: {
        type: Number,
        required: true,
    },
    txtRoute: {
        type: String,
        required: true,
    },
    txtDays: {
        type: Number,
        required: true,

    },


})

module.exports = mongoose.model('NewPlace', newPlaceSchema)
