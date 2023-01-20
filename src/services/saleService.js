const { saleModel } = require('../models');
const { postSaleValidation } = require('./validations/productsValidation');

const reqSales = async (req) => {
  const listSales = req.body;
  const responseValidation = await postSaleValidation(listSales);
  if (responseValidation) return responseValidation;

  const id = await saleModel.salesRequisition(listSales);

  return { status: 201, response: { id, itemsSold: [...listSales] } };
};

module.exports = {
  reqSales,
};