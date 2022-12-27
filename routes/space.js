const express = require('express')
const router = express.Router()

const {createSpace, getSpace} = require('../controller/spaceController')

router.post('/create', createSpace)
router.get('/get', getSpace)

module.exports = router