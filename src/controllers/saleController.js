const { saleService } = require('../services');

const reqSales = async (req, res) => {
  const { status, response } = await saleService.reqSales(req);
  res.status(status).json(response);
};

module.exports = {
  reqSales,
};