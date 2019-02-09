const recoverTask = require('../../models/recoverTask');

async function getTask (req, res) {
    user_Id = req.user._id;
    const tasks = await recoverTask.find({user_id: user_Id});
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

module.exports = {
    getTask
}