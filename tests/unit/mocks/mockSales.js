const mockProductsForSale = [
  { sale_id: 1, product_id: 1, quantity: 5 },
  { sale_id: 1, product_id: 2, quantity: 10 },
  { sale_id: 2, product_id: 3, quantity: 15 },
]
const mockProductsNonExistent = [
  { sale_id: 1, product_id: 9999, quantity: 5 },
  { sale_id: 1, product_id: 8888, quantity: 10 },
  { sale_id: 2, product_id: 7777, quantity: 15 },
]
const mockListSales = [
  {
    "productId": 1,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  }
]
const mockIDNonExistent = [
  {
    "a": 1,
    "quantity": 1
  },
  {
    "c": 2,
    "quantity": 5
  }
]
const mockQuantityNonExistent = [
  {
    "productId": 1,
    "a": 1
  },
  {
    "productId": 2,
    "b": 5
  }
]
const mockQuantitySmallerZero = [
  {
    "productId": 1,
    "quantity": 0
  },
  {
    "productId": 2,
    "quantity": 0
  }
]

const mockSale = [
  {
    "date": "2022-10-13T21:45:29.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "date": "2022-10-13T21:45:29.000Z",
    "productId": 2,
    "quantity": 10
  }
]

const mockListAllSales = [
  {
    "saleId": 1,
    "date": "2022-10-13T21:45:29.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "saleId": 1,
    "date": "2022-10-13T21:45:29.000Z",
    "productId": 2,
    "quantity": 10
  },
  {
    "saleId": 2,
    "date": "2022-10-13T21:45:29.000Z",
    "productId": 3,
    "quantity": 15
  }
]
module.exports = {
  mockProductsForSale,
  mockListSales,
  mockIDNonExistent,
  mockQuantityNonExistent,
  mockQuantitySmallerZero,
  mockProductsNonExistent,
  mockListAllSales,
}
