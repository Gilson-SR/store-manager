const { productsService } = require('../services');

const getAll = async (req, res) => {
  const { status, response } = await productsService.getAll(req);
  res.status(status).json(response);
};

const getProduct = async (req, res) => {
  const { status, response } = await productsService.getProduct(req);
  res.status(status).json(response);
};

module.exports = {
  getAll,
  getProduct,
};