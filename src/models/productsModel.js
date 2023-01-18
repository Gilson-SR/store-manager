const connection = require('./connection');

const getAll = async () => {
  const dbQuery = `
    SELECT *
    FROM products;
  `;
  const [result] = await connection.query(dbQuery);
  return result;
};

const getById = async (productID) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM products WHERE id= ?',
    [productID],
  );
  return product;
};

module.exports = {
  getAll,
  getById,
};