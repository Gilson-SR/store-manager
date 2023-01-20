const connection = require('./connection');

const getAllSales = async () => {
  const dbQuery = `
    SELECT *
    FROM StoreManager.sales_products;
  `;
  const [productsForSale] = await connection.execute(dbQuery);
  return productsForSale;
};

const salesRequisition = async (listSales) => {
  const dbQuery = `
    INSERT INTO StoreManager.sales
    (date)
    VALUES
    (current_timestamp())
  `;
  const [{ insertId }] = await connection.execute(dbQuery);

  const promises = [];

  listSales.forEach((sale) => {
    const secondDBQuery = `
    INSERT INTO StoreManager.sales_products
    (sale_id, product_id, quantity)
    VALUES (?, ?, ?)`;
    const insertItem = connection.execute(secondDBQuery, [insertId, sale.productId, sale.quantity]);
    promises.push(insertItem);
  });

  await Promise.all(promises);
  return insertId;
};

module.exports = {
  getAllSales,
  salesRequisition,
};