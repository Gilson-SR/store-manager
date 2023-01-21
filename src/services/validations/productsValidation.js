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

const checkExistence = (listSales, listSalesLength) => {
  for (let i = 0; i < listSalesLength; i += 1) {
    if (!('productId' in listSales[i])) {
      return { status: 400, response: { message: '"productId" is required' } };
    }
    if (!('quantity' in listSales[i])) {
      return { status: 400, response: { message: '"quantity" is required' } };
    }
  }
};

const checkValidity = (listSales) => {
  for (let i = 0; i < (listSales && listSales.length); i += 1) {
    if (listSales[i].quantity <= 0) {
      return {
        status: 422, response: { message: '"quantity" must be greater than or equal to 1' },
      };
    }
  }
};

const getListProductsForSale = async (listSales) => {
  const productsForSale = await saleModel.getAllSales();
  const listProductsId = productsForSale && productsForSale.map((e) => e.product_id);
  const possibleProductsId = listSales && listSales.map((e) => e.productId);
  return { listProductsId, possibleProductsId };
};

const checkProduct = async (listSales) => {
  const { listProductsId, possibleProductsId } = await getListProductsForSale(listSales);
  for (let i = 0; i < (possibleProductsId && possibleProductsId.length); i += 1) {
    if (!listProductsId.some((e) => possibleProductsId[i] === e)) {
      return { status: 404, response: { message: 'Product not found' } };
    }
  }
};

const postSaleValidation = (listSales, listSalesLength) => {
  if (checkExistence(listSales, listSalesLength)) return checkExistence(listSales, listSalesLength);
  if (checkValidity(listSales)) return checkValidity(listSales);
  if (checkProduct(listSales)) return checkProduct(listSales);
};

module.exports = {
  postProductValidation,
  postSaleValidation,
};