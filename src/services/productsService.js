const { productsModel } = require('../models/productsModel');

const getAllProducts = async () => {
  const products = await productsModel.getAll();
  return { status: 200, message: products };
};

const getProduct = async (request) => {
  const { id } = request.params;
  const products = await productsModel.getById(id);
  if (!products) {
 return {
    status: 404, message: 'Product not found',
  };
}
  return { status: 200, message: products };
};

module.exports = {
  getAllProducts,
  getProduct,
};