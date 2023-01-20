const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const {
  mockProductsForSale, mockListSales, mockIDNonExistent, mockQuantityNonExistent,
  mockQuantitySmallerZero, mockProductsNonExistent
} = require('../mocks/mockSales');

const { saleModel } = require('../../../src/models');
const { reqSales } = require('../../../src/services/saleService');
const { postSaleValidation } = require('../../../src/services/validations/productsValidation');

describe('Test saleService', () => {
  describe('test 1', () => {
    it('', async () => {
      sinon
        .stub(saleModel, 'getAllSales')
        .resolves(mockProductsForSale);

      await postSaleValidation(mockListSales);
    })
    it('', async () => {
      sinon
        .stub(saleModel, 'getAllSales')
        .resolves(mockProductsForSale);

      await postSaleValidation(mockIDNonExistent);
    })
    it('', async () => {
      sinon
        .stub(saleModel, 'getAllSales')
        .resolves(mockProductsForSale);

      await postSaleValidation(mockQuantityNonExistent);
    })
    it('', async () => {
      sinon
        .stub(saleModel, 'getAllSales')
        .resolves(mockProductsForSale);

      await postSaleValidation(mockQuantitySmallerZero);
    })
    it('', async () => {
      sinon
        .stub(saleModel, 'getAllSales')
        .resolves(mockProductsNonExistent);

      await postSaleValidation(mockListSales);
    })
  })

  // describe('Test 2', () => {
  //   it('', async () => {
  //     sinon
  //       .stub(saleModel, 'salesRequisition')
  //       .resolves({ insertId: 10 });
  //     await reqSales(mockListSales);
  //   })
  // })



  afterEach(sinon.restore);
})