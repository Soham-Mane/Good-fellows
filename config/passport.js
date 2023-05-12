// Setting up passport for authentication.

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");


module.exports = function(passport){
    passport.use(
        new LocalStrategy({usernameField: 'phoneNumber'}, function(phoneNumber,password,done){
            User.findOne({phoneNumber: phoneNumber})
            .then(user => {
                if(!user){
                    return done(null,false, {message: "That phone number is not registered"});
                }
                bcrypt.compare(password, user.password, function(err, isMatch){
                    if(err)
                    {
                        console.log(err);
                    }
                    if(isMatch){
                        return done(null,user);
                    }
                    else{
                        return done(null, false, {message: "Password incorrect"});
                    }
                })
            })
            .catch(err => console.log(err));
        })
    );

    // serialising the user to decide which key is to be kept in the cookie
    passport.serializeUser(function(user,done){
        done(null,user.id);
    });
    // deserialising the user from the key in the cookie at server
    passport.deserializeUser(function(id,done){
        User.findById(id,function(err,user){
        if(err){
            console.log("Error in finding user");
            return done(err);
        }
        return done(null, user);
    });
    });

}