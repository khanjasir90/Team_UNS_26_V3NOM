const User = require('../model/User')
const mongoose = require('mongoose');
const { resetWatchers } = require('nodemon/lib/monitor/watch');

exports.changePassword = async(req,res,next) => {
    try {
        const { currentPassword, newPassword } = req.body
        var userId = req.params.id;

        var result = await User.findById(userId)
        .catch(err => {
            next(err);
        })
        
        if( currentPassword != result.password ){
            return res.status(200).send({status:400,message:"Password is Wrong"})
        }
        else{
            var updatedPassword = await User.findByIdAndUpdate(userId, { password : newPassword }, {new: true})
            .catch(error =>{
                next(error)
            })
        
            res.status(200).json({
                status: 200,            
                data : {
                    updatedPassword: updatedPassword
                }
            })
        }
        return;
    }
    catch(error) {
        next(error)
    }
}

exports.deleteAccount = async(req,res,next) => {
    try{

        const { currentPassword } = req.body
        
        var userId = req.params.id;

        var result = await User.findById(userId)
        .catch(err => {
            next(err);
        })

        if( currentPassword != result.password ){
            res.status(200).send({status:400,message:"Password is Wrong"})
        }
        else{
            await User.findOneAndDelete(userId)
            .catch(error =>{
                next(error)
            })
            res.status(200).json({
                status: 200,            
                data : {
                    message: "Deleted"
                }
            })
        }
        return ;
    }catch(error) {
        next(error)
    }
}