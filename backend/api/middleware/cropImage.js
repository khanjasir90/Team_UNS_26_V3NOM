const multer = require('multer');
const upload = multer({dest: "uploads/"});
var path = require('path');
var fs = require('fs');
//image upload code

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
      },
    filename: function (req, file, cb) {
        var cropName = req.body.cropName
        cb(null, "Crop" + "_" + cropName + path.extname(file.originalname));
    }
});

exports.cropImg = multer({storage: storage}).single('image');