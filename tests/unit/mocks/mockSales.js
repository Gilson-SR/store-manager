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
    'productId': 1,
    'quantity': 1
  },
  {
    'productId': 2,
    'quantity': 5
  }
]

const mockIDNonExistent = [
  {
    'a': 1,
    'quantity': 1
  },
  {
    'c': 2,
    'quantity': 5
  }
]

const mockQuantityNonExistent = [
  {
    'productId': 1,
    'a': 1
  },
  {
    'productId': 2,
    'b': 5
  }
]

const mockQuantitySmallerZero = [
  {
    'productId': 1,
    'quantity': 0
  },
  {
    'productId': 2,
    'quantity': 0
  }
]

module.exports = {
  mockProductsForSale,
  mockListSales,
  mockIDNonExistent,
  mockQuantityNonExistent,
  mockQuantitySmallerZero,
  mockProductsNonExistent,
}