const express = require('express');
const passport = require('passport');
const authController = require('../auth.controller');
const router = express.Router();


router.post('/', (req, res, next)=>{
    console.log('req is coming');
    passport.authenticate('local', (err, user, info)=>{
        var error = err || info;
        if(error) {
            statusCode = 401;
            res.status(statusCode).send({
                meta:{
                    message:error,
                    statusCode:statusCode
                }
            });
        }
        else {
            let data = {
                user: user,
                token: authController.signToken({_id:user._id, username:user.username, email:user.email})
            }

            console.log(data.user._id)
            statusCode = 200;
            res.status(statusCode).send({
                meta:{
                    data: data.user,
                    token:data.token,
                    message:"user Logged in successfully",
                    statusCode:statusCode
                }
            });	
        }
    })(req, res, next);
});

module.exports = router;