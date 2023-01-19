const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { mockGetAll, mockGetProduct } = require("../mocks/mockProducts");

const connection = require("../../../src/models/connection");
const { getAll, getById } = require("../../../src/models/productModel");

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
  afterEach(sinon.restore);
})