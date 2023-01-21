const express = require('express');
const saleController = require('../controllers/saleController');

const router = express.Router();

router.post('/', saleController.reqSales);
router.get('/', saleController.getAllSales);
router.get('/:id', saleController.getSale);

module.exports = router;