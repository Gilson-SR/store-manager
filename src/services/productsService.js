const { productsModel } = require('../models');
const { postProductValidation } = require('./validations/productsValidation');

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

const reqProduct = async (req) => {
  const { name } = req.body;
  const responseValidation = postProductValidation(name);
  if (responseValidation) return responseValidation;
  const request = { name };
  const id = await productsModel.postRequest(request);
  return { status: 201, response: { ...request, id } };
};

const putProduct = async (req) => {
  const { id } = req.params;
  const { name } = req.body;
  const responseValidation = postProductValidation(name);
  if (responseValidation) return responseValidation;
  const product = await productsModel.getById(id);
  if (!product) return { status: 404, response: { message: 'Product not found' } };
  await productsModel.putRequest(name, id);
  return { status: 200, response: { name, id } };
};

module.exports = {
  getAll,
  getProduct,
  reqProduct,
  putProduct,
};