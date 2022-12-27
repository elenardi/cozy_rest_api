const express = require('express')
const router = express.Router()

const space = require('./space')

router.use('/space', space)

module.exports = router