const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { mockGetAll, mockGetProduct } = require("../mocks/mockProducts");

const { productsModel } = require("../../../src/models");
const { getAll, getProduct } = require("../../../src/services/productService");

describe('Test productsServices', () => {
	describe('Test 1', () => {
    it('', async () => {
      sinon
        .stub(productsModel, 'getAll')
        .resolves(mockGetAll);

      await getAll();
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

      await getProduct(req);
		})
		it('', async () => {
      const req = {
        params: { id: 99999 },
      };

      sinon
        .stub(productsModel, 'getById')
        .resolves(undefined);

      await getProduct(req);
		})
	})
  afterEach(sinon.restore);
})