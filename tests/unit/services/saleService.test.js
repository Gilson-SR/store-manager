

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const {
  mockProductsForSale, mockListSales, mockIDNonExistent, mockQuantityNonExistent,
  mockQuantitySmallerZero, mockProductsNonExistent, mockListAllSales, mockSale
} = require('../mocks/mockSales');

const { saleModel } = require('../../../src/models');
const { postSaleValidation } = require('../../../src/services/validations/productsValidation')
const { getAllSales, getSale } = require("../../../src/services/saleService");

describe('Test saleService', () => {
  describe('test 1', () => {
    it('', async () => {
      sinon
        .stub(saleModel, 'getAllSales')
        .resolves(mockProductsForSale);

      await postSaleValidation(mockListSales, mockListSales.length);
		})
    it('', async () => {
      sinon
        .stub(saleModel, 'getAllSales')
        .resolves(mockProductsForSale);

      await postSaleValidation(mockIDNonExistent, mockIDNonExistent.length);
		})
    it('', async () => {
      sinon
        .stub(saleModel, 'getAllSales')
        .resolves(mockProductsForSale);

      await postSaleValidation(mockQuantityNonExistent, mockQuantityNonExistent.length);
		})
    it('', async () => {
      sinon
        .stub(saleModel, 'getAllSales')
        .resolves(mockProductsForSale);

      await postSaleValidation(mockQuantitySmallerZero, mockQuantitySmallerZero.length);
		})
    it('', async () => {
      sinon
        .stub(saleModel, 'getAllSales')
        .resolves(mockProductsNonExistent);

      await postSaleValidation(mockListSales, mockListSales.length);
    })
  })

  describe('Test 2', () => {
    it('', async () => {
      sinon
        .stub(saleModel, 'getAll')
        .resolves(mockListAllSales);

      await getAllSales();
    })
  })
  describe('Teste 3', () => {
    it('', async () => {
      req = {
        params: { id: 1 }
      }
      sinon
        .stub(saleModel, 'getById')
        .resolves(mockSale);

      await getSale(req);
    })
    it('', async () => {
      req = {
        params: { id: 99999 }
      }
      sinon
        .stub(saleModel, 'getById')
        .resolves([]);

      await getSale(req);
    })
  })

  afterEach(sinon.restore);
})