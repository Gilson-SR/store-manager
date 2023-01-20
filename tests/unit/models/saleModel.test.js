const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { mockListSales } = require('../mocks/mockSales');

const connection = require('../../../src/models/connection');
const { salesRequisition } = require('../../../src/models/saleModel');

describe('Test saleModel', () => {
  describe('Teste 1', () => {
    it('', async () => {
      sinon
        .stub(connection, 'execute')
        .resolves([{ insertId: 10 }]);

      await salesRequisition(mockListSales);
    })
  })
  afterEach(sinon.restore);
})