const mongoose = require('mongoose')
const { Schema } = mongoose


const dataSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 15
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    criteria: {
        type: String,
        required: true
    },
    priceSignal: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    activeDay: {
        type: String
    },
    createdBy:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('data', dataSchema)