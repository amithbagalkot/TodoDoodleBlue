const mongoose = require('mongoose');

//ExpiredTaskSchema

const ExpiredTaskSchema = mongoose.Schema({
    user_id : {
        type: String
    },
    taskname: { 
        type: String
    },
    createdAt: {
        type:Date
    },
    updatedTime: {
        type:Date
    },
    expiryDate: {
        type: Date, 
        required: true
    }
})

const ExpiredTask = module.exports = mongoose.model('ExpiredTask', ExpiredTaskSchema);