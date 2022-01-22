const User = require('../model/User')
const mongoose = require('mongoose');
const { resetWatchers } = require('nodemon/lib/monitor/watch');

exports.registerUser = async(req,res,next) => {
    try {
        const { name,email,contact,isFarmer,password } = req.body
        
        var userType;
        if(isFarmer == "1") userType=true
        else userType=false

        const userExist = await User.findOne({email:email});

        if (userExist) {
        res.status(200).send({ status: 400, message: "User already exist!!!" });
        return;
         }

        const createNewUser = new User({
            name:name,
            email:email,
            contact:contact,
            isFarmer: userType,
            password:password 
        })
        const user = await createNewUser.save();
        res.status(200).send({ status: 200, message: "User Registered Successfully" });
        return;
    }catch(error) {
        next(error)
    }
}

exports.loginUser = async(req,res,next) => {
    try{

        const {email,password} = req.body
        const user = await User.findOne({email:email})
        if(user == null) {
            res.status(200).send({status:400,message:"Invalid Username or Password"})
        }else{
            if(email == user.email && user.password == password) {
                res.status(200).json({
                    status: 200,
                    message: "User Login Successfully",
                    data : {
                        user: user
                    }
                })
            }
        }

    }catch(error) {
        next(error)
    }
}