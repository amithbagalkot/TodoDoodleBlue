const Task = require('../../models/task');
const RecoverTask = require('../../models/recoverTask');

async function getTasks(req, res) {
    user_Id = req.user._id;
    const tasks = await Task.find({user_id: user_Id});
    if(tasks) {
        statusCode = 200;
            res.status(statusCode).send({
                meta:{
                    data:tasks,
                    statusCode:statusCode
                }
            });	
    }
}
async function addTask(req, res) {
    user_Id = req.user._id;
    const creatDate = new Date();
    const expiredDate = creatDate.setHours(creatDate.getHours()+4);;
    let newTask = new Task({
        user_id: user_Id,
        taskname: req.body.taskname, 
        createdAt: req.body.createdAt || creatDate, 
        updatedTime: req.body.updatedTime,
        expiryDate: expiredDate 
    });
    const newTaskk= await newTask.save();
    if(newTaskk) {
        const tasks = await Task.find({user_id: user_Id});
        statusCode = 200;
            res.send({
                meta:{
                    data:tasks,
                    statusCode:statusCode
                }
            });
    }
}


async function deleteTask(req, res) {
    const id = req.query.id || req.params.id;
    const user_Id = req.user._id;
    const findTaskByUser = await Task.find({_id: id});
    if(findTaskByUser) {
       let  recoverTask = new RecoverTask({
        user_id: findTaskByUser[0].user_id,
        taskname: findTaskByUser[0].taskname, 
        createdAt: findTaskByUser[0].createdAt, 
        updatedTime: findTaskByUser[0].updatedTime,
        expiryDate: findTaskByUser[0].expiryDate 
       }) 
        const taskRemove = await Task.deleteOne({"_id": id});
        const recover = await recoverTask.save();
    if(taskRemove) {
        const taskss = await Task.find({user_id: user_Id});
        statusCode = 200;
            res.status(statusCode).send({
                meta:{
                    data:taskss,
                    statusCode:statusCode
                }
            });	
    }
  }
}

async function updateTask(req, res) {
    const updateDate = new Date();
    const id = req.params.id || req.query.id;
    const user_Id = req.user._id;
    const task = await Task.find({user_id: user_Id});
    if(task) {
        const update = await Task.findOneAndUpdate({"_id": id }, {$set: {taskname: req.body.taskname.taskname, updatedTime:updateDate}}, {new: true});   
        if(update) {
            const task = await Task.find({user_id: user_Id});
            statusCode = 200;
            res.status(statusCode).send({
                meta:{
                    data:task,
                    statusCode:statusCode
                }
            });	
        }
    }
   
}

module.exports = {
    getTasks,
    addTask,
    deleteTask,
    updateTask
}