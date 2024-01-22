const express = require('express')
const { create, update, detail, all } = require('../controllers/productController')
const router = express.Router()


router.get('/all', all)
router.get('/detail/:id', detail)
router.post('/create',create)
router.put('/update/:id', update)

module.exports = router;

