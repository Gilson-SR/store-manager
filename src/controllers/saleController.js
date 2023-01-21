const { saleService } = require('../services');

const getAllSales = async (req, res) => {
  const { status, response } = await saleService.getAllSales();
  res.status(status).json(response);
};

const getSale = async (req, res) => {
  const { status, response } = await saleService.getSale(req);
  res.status(status).json(response);
};

const reqSales = async (req, res) => {
  const { status, response } = await saleService.reqSales(req);
  res.status(status).json(response);
};

module.exports = {
  reqSales,
  getAllSales,
  getSale,
};