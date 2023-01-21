const { saleModel } = require('../models');
const { postSaleValidation } = require('./validations/productsValidation');

const getAllSales = async () => {
  const sales = await saleModel.getAll();
  return { status: 200, response: sales };
};

const getSale = async (req) => {
  const { id } = req.params;
  const sale = await saleModel.getById(id);
  if (sale && !sale.length) return { status: 404, response: { message: 'Sale not found' } };
  return { status: 200, response: sale };
};

const reqSales = async (req) => {
  const listSales = await req.body;
  const listSalesLength = listSales && listSales.length;
  const responseValidation = await postSaleValidation(listSales, listSalesLength);
  if (responseValidation) return responseValidation;

  const id = await saleModel.salesRequisition(listSales);

  return { status: 201, response: { id, itemsSold: [...listSales] } };
};

module.exports = {
  reqSales,
  getAllSales,
  getSale,
};