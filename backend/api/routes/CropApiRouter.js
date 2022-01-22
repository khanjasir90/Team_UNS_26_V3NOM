const express = require('express')
const router = express.Router()
const cropImage = require("../middleware/cropImage");


const { addCrops, cropsDetails, cropById, updateCrop, cropByEmail } = require('../controller/CropsController')

router.post('/', cropImage.cropImg, addCrops)
router.get('/crops', cropsDetails)
router.get('/:id', cropById)
router.post('/:id', updateCrop)
router.post('/cropByEmail', cropByEmail)

module.exports = router