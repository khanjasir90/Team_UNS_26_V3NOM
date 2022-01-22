const Crop = require('../model/Crop');
const Farmer = require('../model/Farmer');
const mongoose = require('mongoose');

exports.addCrops = async(req,res,next) => {
    try {
        console.log(req.body);
        const { email, cropName, image, quantity, perKgPrice } = req.body
        
        const newCrop = new Crop({
            email: email,
            cropName: cropName, 
            image: req.file ? req.file.path : req.body.path, 
            quantity: quantity, 
            perKgPrice: perKgPrice
        })
        const user = await newCrop.save();
        res.status(200).send({ status: 200, message: "Saved" });
        return;
    }
    catch(error) {
        next(error)
    }
}

exports.cropsDetails = async(req,res,next) => {
    try {
        const crop = await Crop.find({})
        res.status(200).json({
            status: 200,            
            data : {
                crop: crop
            }
        })
        return;
    }catch(error) {
        next(error)
    }
}

exports.cropById = async(req,res,next) => {
    try {
        Crop.findById(req.params.id)
        .then(results => {
            res.status(200).json({
                status: 200,            
                data : {
                    results: results
                }
            })
        })
        .catch(error =>{
            next(error)
        })
        return;
    }catch(error) {
        next(error)
    }
}

exports.updateCrop = async(req,res,next) => {
    try {
        const { quantity, perKgPrice } = req.body;

        var updatedCrop = await Crop.findByIdAndUpdate(req.params.id, {quantity: quantity, perKgPrice: perKgPrice}, {new: true})
        .catch(error =>{
            next(error)
        })
        
        res.status(200).json({
            status: 200,            
            data : {
                updatedCrop: updatedCrop
            }
        })
    
        return;
    }catch(error) {
        next(error)
    }
}