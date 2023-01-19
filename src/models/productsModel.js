const connection = require('./connection');

const getAllProducts = async () => {
  const dbQuery = `
    SELECT *
    FROM StoreManager.products;
  `;
  const [products] = await connection.query(dbQuery);
  return products;
};

const getById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id= ?',
    [id],
  );
  return result;
};

module.exports = {
  getAllProducts,
  getById,
};