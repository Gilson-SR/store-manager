const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { mockListSales, mockListAllSales } = require("../mocks/mockSales");

const { saleService } = require('../../../src/services');
const { reqSales, getAllSales, getSale, mockSale } = require("../../../src/controllers/saleController");

describe('Test saleController', () => {
	describe('Test 1', () => {
		it('', async () => {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(saleService, 'reqSales')
        .resolves({ status: 201, response: { id: 1, itemsSold: [...mockListSales] } });

      await reqSales(req, res);
		})
  })
  describe('Test 2', () => {
    it('', async () => {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(saleService, 'getAllSales')
        .resolves({ status: 200, response: mockListAllSales });

      await getAllSales(req, res);
    })
  })
	describe('Test 3', () => {
		it('{', async () => {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(saleService, 'getSale')
        .resolves({ status: 200, response: mockSale });

      await getSale(req, res);
		})
	})
})