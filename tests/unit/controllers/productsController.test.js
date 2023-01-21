const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { mockGetAll, mockGetProduct } = require('../mocks/mockProducts');

const { productsService } = require('../../../src/services');
const { productsController} = require('../../../src/controllers');

describe('Test productsController', () => {
	describe('Test 1', () => {
    it('', async () => {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, 'getAll')
        .resolves({ status: 200, response: mockGetAll });

      await productsController.getAll(req, res);

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

      await productsController.getProduct(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mockGetProduct);
		})
	  })

  	describe('Test 3', () => {
		it('', async () => {
      const res = {};
      const req = {
        name: 'Product X'
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, 'reqProduct')
        .resolves({ status: 201, response: { ...req.body, id: 1 } });

      await productsController.reqProduct(req, res);
		})
    })
    describe('Test 4', () => {
    it('', async () => {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, 'putProduct')
        .resolves({ status: 200, response: { name: 'XXX', id: 1 } });

      await productsController.putProduct(req, res);
    })
     })
  	describe('Test 5', () => {
    it('', async () => {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, 'deleteProduct')
        .resolves({ status: 204 });

      await productsController.deleteProduct(req, res);
		})
	})

})