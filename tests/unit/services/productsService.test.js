const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { mockGetAll, mockGetProduct } = require('../mocks/mockProducts');

const { productsModel } = require('../../../src/models');
const { productsService } = require('../../../src/services');

describe('Test productsServices', () => {
	describe('Test 1', () => {
    it('', async () => {
      sinon
        .stub(productsModel, 'getAll')
        .resolves(mockGetAll);

      await productsService.getAll();
		})
	})
	describe('Test 2', () => {
		it('', async () => {
      const req = {
        params: { id: 1 },
      };

      sinon
        .stub(productsModel, 'getById')
        .resolves(mockGetProduct);

      await productsService.getProduct(req);
		})
		it('', async () => {
      const req = {
        params: { id: 99999 },
      };

      sinon
        .stub(productsModel, 'getById')
        .resolves(undefined);

      await productsService.getProduct(req);
    })
  })

  describe('Test 3', () => {
    it('', async () => {
      const req = {
        body: { name: 'Product X' },
      };

      sinon
        .stub(productsModel, 'postRequest')
        .resolves(1);

      await productsService.reqProduct(req);
    })
    it('', async () => {
      const req = {
        body: { name: '' },
      };

      sinon
        .stub(productsModel, 'postRequest')
        .resolves(1);

      await productsService.reqProduct(req);
		})
    it('', async () => {
      const req = {
        body: { xxxxx: 'Product X' },
      };

      sinon
        .stub(productsModel, 'postRequest')
        .resolves(1);

      await productsService.reqProduct(req);
		})
    it('', async () => {
      const req = {
        body: { name: 'P' },
      };

      sinon
        .stub(productsModel, 'postRequest')
        .resolves(1);

      await productsService.reqProduct(req);
		})
	})
  afterEach(sinon.restore);
})