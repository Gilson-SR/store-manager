const { productsModel } = require('../models');

const getAll = async () => {
  const products = await productsModel.getAll();
  return { status: 200, response: products };
};

const getProduct = async (req) => {
  const { id } = req.params;
  const products = await productsModel.getById(id);
  if (!products) return { status: 404, response: { message: 'Product not found' } };
  return { status: 200, response: products };
};

module.exports = {
  getAll,
  getProduct,
};