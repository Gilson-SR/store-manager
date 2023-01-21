const express = require('express');
const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/', productsController.getAll);
router.get('/:id', productsController.getProduct);
router.post('/', productsController.reqProduct);
router.put('/:id', productsController.putProduct);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;