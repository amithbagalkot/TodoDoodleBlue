const bcrypt = require("bcryptjs");

const User = require('../../models/user');

function registerUser(req, res) {
    let newUser = new User({
        name: req.body.name, 
        email: req.body.email, 
        username: req.body.username,
        password: req.body.password 
    });

    User.addUser(newUser, (err, user)=>{
        if(err) {
            res.json({Success: false, msg:"failed to register user"});
        } else {
            statusCode = 200;
            res.status(statusCode).send({
                meta:{
                    message:"user registered successfully",
                    statusCode:statusCode
                }
            });	
        }
    })
}
function userProfile(req, res) {
    res.send("authenticated");
}



module.exports = {
    registerUser,
    userProfile
}