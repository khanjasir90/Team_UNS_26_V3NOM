const express = require('express')
const router = express.Router()

const { changePassword, deleteAccount } = require('../controller/settingController')

router.post('/changePassword/:id', changePassword)
router.post('/deleteAccount/:id', deleteAccount)

module.exports = router