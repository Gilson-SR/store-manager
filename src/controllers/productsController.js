const { productsService } = require('../services');

const getAllProducts = async (req, res) => {
  const { status, message } = await productsService.getAllProducts(req);
  res.status(status).json(message);
};

const getProduct = async (req, res) => {
  const { status, message } = await productsService.getProduct(req);
  res.status(status).json(message);
};

module.exports = {
  getAllProducts,
  getProduct,
};