const { productsService } = require('../services');

const getAllProducts = async (req, res) => {
  const { status, response } = await productsService.getAllProducts(req);
  res.status(status).json(response);
};

const getProduct = async (req, res) => {
  const { status, response } = await productsService.getProduct(req);
  res.status(status).json(response);
};

module.exports = {
  getAllProducts,
  getProduct,
};