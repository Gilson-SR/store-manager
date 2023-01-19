const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { mockGetAll, mockGetProduct } = require("../mocks/mockProducts");

const connection = require("../../../src/models/connection");
const { getAll, getById, postRequest } = require("../../../src/models/productModel");

describe('Test productsModels', () => {
	describe('Test 1', () => {
    it('', async () => {
      sinon
        .stub(connection, 'execute')
        .resolves(mockGetAll);

      await getAll();
		})
  })

	describe('Test 2', () => {
		it('', async () => {
      sinon
        .stub(connection, 'execute')
        .resolves([[mockGetProduct]]);

      await getById(1);
		})
	})

  describe('Test 3', () => {
		it('', async () => {
      sinon
        .stub(connection, 'execute')
        .resolves([1]);

      await postRequest({ name: 'Product X' });
		})
  })

  afterEach(sinon.restore);
})