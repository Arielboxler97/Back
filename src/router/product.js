const express = require('express')
const {create} = require('../controllers/products/create')
const router = express.Router()

router.get('/products')
router.post('/products/create',create)

module.exports = router

