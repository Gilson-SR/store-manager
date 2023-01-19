const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { mockGetAll, mockGetProduct } = require("../mocks/mockProducts");

const { productsService } = require("../../../src/services");
const { getAll, getProduct } = require("../../../src/controllers/productsController");

describe('Test productsController', () => {
	describe('Test 1', () => {
    it('', async () => {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);c
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, 'getAll')
        .resolves({ status: 200, response: mockGetAll });

      await getAll(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mockGetAll);
		})
	})
	describe('Test 2', () => {
		it('', async () => {
      const res = {};
      const req = {
        params: { id: 1 },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, 'getProduct')
        .resolves({ status: 200, response: mockGetProduct });

      await getProduct(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mockGetProduct);
		})
	})
})