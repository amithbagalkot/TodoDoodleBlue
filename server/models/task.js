const mongoose = require('mongoose');

//TaskSchema

const TaskSchema = mongoose.Schema({
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

const Task = module.exports = mongoose.model('Task', TaskSchema);