const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { mockListSales, mockListAllSales } = require("../mocks/mockSales");

const connection = require('../../../src/models/connection');
const { salesRequisition, getAll } = require("../../../src/models/saleModel");

describe('Test saleModel', () => {
  describe('Teste 1', () => {
    it('', async () => {
      sinon
        .stub(connection, 'execute')
        .resolves([{ insertId: 10 }]);

      await salesRequisition(mockListSales);
    })
  })
   describe('Teste 2', () => {
    it('', async () => {
      sinon
        .stub(connection, 'execute')
        .resolves(mockListAllSales);

      await getAll();
    })
  })
  afterEach(sinon.restore);
})