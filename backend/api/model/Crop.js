const mongoose = require("mongoose");
var conn = mongoose.Collection;
var CropSchema = new mongoose.Schema({
    
    email: {
        type: mongoose.Schema.Types.String, ref: 'Farmer'
    },
    cropName: {
        type: String,
    },
    image: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    perKgPrice: {
        type: Number,
    }
},
{ timestamps: true }
);

var Crop = mongoose.model('Crop',CropSchema);
module.exports = Crop;