const mongoose = require('mongoose');

//RecoverTaskSchema

const RecoverTaskSchema = mongoose.Schema({

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

const RecoverTask = module.exports = mongoose.model('RecoverTask', RecoverTaskSchema);