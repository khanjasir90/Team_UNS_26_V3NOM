const express = require('express')
const router = express.Router()
const cropImage = require("../middleware/cropImage");


const { addCrops, cropsDetails, cropById, updateCrop, farmercrops } = require('../controller/CropsController')

router.post('/', cropImage.cropImg, addCrops)
router.get('/crops', cropsDetails)
router.post('/farmercrops', farmercrops)
router.get('/:id', cropById)
router.post('/:id', updateCrop)

module.exports = router