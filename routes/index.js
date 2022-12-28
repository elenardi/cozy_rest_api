const express = require('express')
const router = express.Router()

const space = require('./space')
const city = require('./city')

router.use('/space', space)
router.use('/city', city)

module.exports = router