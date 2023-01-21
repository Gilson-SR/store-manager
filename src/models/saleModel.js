const connection = require('./connection');

const getAll = async () => {
  const dbQuery = `
    SELECT
    (sp.sale_id) AS saleId,
    (s.date) AS date,
    (sp.product_id) AS productId,
    (sp.quantity) AS quantity
  FROM StoreManager.sales_products AS sp
    JOIN StoreManager.sales AS s ON s.id = sp.sale_id
      ORDER BY sp.sale_id ASC, sp.product_id ASC
  `;
  const [sales] = await connection.execute(dbQuery);
  return sales;
};

const getById = async (id) => {
  const dbQuery = `
    SELECT
      (s.date) AS date,
      (sp.product_id) AS productId,
      (sp.quantity) AS quantity
    FROM StoreManager.sales_products AS sp
      JOIN StoreManager.sales AS s ON s.id = sp.sale_id
        WHERE sp.sale_id = ?
  `;
  const [sale] = await connection.execute(dbQuery, [id]);
  return sale;
};

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
  getAll,
  getById,
};