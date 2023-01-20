const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { mockGetAll, mockGetProduct } = require('../mocks/mockProducts');

const connection = require('../../../src/models/connection');
const { productsModel } = require('../../../src/models');

describe('Test productsModels', () => {
	describe('Test 1', () => {
    it('', async () => {
      sinon
        .stub(connection, 'execute')
        .resolves(mockGetAll);

      await productsModel.getAll();
		})
  })

	describe('Test 2', () => {
		it('', async () => {
      sinon
        .stub(connection, 'execute')
        .resolves([[mockGetProduct]]);

      await productsModel.getById(1);
		})
	})

  describe('Test 3', () => {
		it('', async () => {
      sinon
        .stub(connection, 'execute')
        .resolves([1]);

      await productsModel.postRequest({ name: 'Product X' });
		})
  })

  afterEach(sinon.restore);
})