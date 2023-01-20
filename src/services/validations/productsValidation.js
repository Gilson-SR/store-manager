const { saleModel } = require('../../models');

const postProductValidation = (parameter) => {
  if (!parameter) return { status: 400, response: { message: '"name" is required' } };
  if (parameter.length <= 5) {
    return {
      status: 422,
      response: { message: '"name" length must be at least 5 characters long' },
    };
  }
};

const checkExistence = (listSales) => {
  for (let i = 0; i < listSales.length; i += 1) {
    if (!('productId' in listSales[i])) {
      return { status: 400, response: { message: '"productId" is required' } };
    }
    if (!('quantity' in listSales[i])) {
      return { status: 400, response: { message: '"quantity" is required' } };
    }
  }
};

const checkValidity = (listSales) => {
  for (let i = 0; i < listSales.length; i += 1) {
    if (listSales[i].quantity <= 0) {
      return {
        status: 422, response: { message: '"quantity" must be greater than or equal to 1' },
      };
    }
  }
};

const checkProduct = async (listSales) => {
  const produtsForSale = await await saleModel.getAllSales();
  const listProductsId = produtsForSale.map((e) => e.product_id);
  const possibleProductsId = listSales.map((e) => e.productId);
  for (let i = 0; i < possibleProductsId.length; i += 1) {
    if (!listProductsId.some((e) => possibleProductsId[i] === e)) {
      return { status: 404, response: { message: 'Product not found' } };
    }
  }
};

const postSaleValidation = (listSales) => {
  if (checkExistence(listSales)) return checkExistence(listSales);
  if (checkValidity(listSales)) return checkValidity(listSales);
  if (checkProduct(listSales)) return checkProduct(listSales);
};

module.exports = {
  postProductValidation,
   postSaleValidation,
};