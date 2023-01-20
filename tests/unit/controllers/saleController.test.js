const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { mockListSales } = require('../mocks/mockSales');

const { saleService } = require('../../../src/services');
const { reqSales } = require('../../../src/controllers/saleControler');

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
})