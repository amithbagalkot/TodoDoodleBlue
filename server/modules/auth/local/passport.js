const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require('../../../models/user');

passport.use(
    new LocalStrategy({
        usernameField: "username",
        "passwordField": "password"
    }, 
async (username, password, done)=>{
    try{
        User.findOne({username:username}, (err, user)=>{
            if(err) {return done({message: "incorrect username"});}
            if(!user){
                return done( {message: "incorrect username"});
            }
            if(User.comparePassword(password, user.password, (err, isMatch)=>{
                if(isMatch) {
                    return done(null, user);
                }
                else {
                    return done( {message: "invalid password"});
                }
            })) {
               return done(null, user);
            }
        });
}
catch (err) {
    return done("unknown Error");
  }
})
);
