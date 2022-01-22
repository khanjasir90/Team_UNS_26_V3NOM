const mongoose = require("mongoose");
var conn = mongoose.Collection;
var FarmerSchema = new mongoose.Schema({
    
    email: {
        type: String
    },
    totalCropSelled: {
        type: Number
    },
    moneyEarned: {
        type: Number
    }
},
{ timestamps: true }
);
var Farmer = mongoose.model('Farmer',FarmerSchema);
module.exports = Farmer;