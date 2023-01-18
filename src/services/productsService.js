const { productsModel } = require('../models/productsModel');

const getAllProducts = async () => {
  const products = await productsModel.getAll();
  return { status: 200, response: products };
};

const getProduct = async (request) => {
  const { id } = request.params;
  const products = await productsModel.getById(id);
  if (!products) return { status: 404, response: { message: 'Product not found' } };
  return { status: 200, response: products };
};

module.exports = {
  getAllProducts,
  getProduct,
};