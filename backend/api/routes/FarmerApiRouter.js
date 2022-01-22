const express = require('express')
const router = express.Router()

const { addFarmer, FarmerDetails } = require('../controller/FarmerController')

router.post('/', addFarmer)
router.get('/Farmers', FarmerDetails)

module.exports = router