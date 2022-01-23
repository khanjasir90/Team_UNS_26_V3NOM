const express = require('express')
const router = express.Router()
const { farmerScheme }  = require('../controller/farmerSchemeController')

router.get('/schemes',farmerScheme)

module.exports = router