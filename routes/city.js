const express = require('express')
const router = express.Router()

const {createCity, getCity} = require('../controller/cityController')

router.post('/create', createCity)
router.get('/get', getCity)

module.exports = router