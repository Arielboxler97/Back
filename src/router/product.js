const express = require('express')
const { create } = require('../controllers/productController')
const { getAllProducts } = require('../services/Product/Product.services')
const router = express.Router()

router.get('/all',getAllProducts)
router.post('/create',create)

module.exports = router;

