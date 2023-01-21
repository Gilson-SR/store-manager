const snakeize = require('snakeize');
const connection = require('./connection');

const getAll = async () => {
    const dbQuery = `
      SELECT *
      FROM StoreManager.products;
    `;
    const [products] = await connection.execute(dbQuery);
    return products;
};

const getById = async (id) => {
  const dbQuery = `
    SELECT *
    FROM StoreManager.products
    WHERE id = ?
  `;
  const [[products]] = await connection.execute(dbQuery, [id]);
  return products;
};

const postRequest = async (request) => {
  const columns = Object.keys(snakeize(request))
    .map((key) => `${key}`)
    .join(', ');
  const values = Object.keys(request)
    .map((_key) => '?')
    .join(', ');

  const dbQuery = `
    INSERT INTO StoreManager.products
    (${columns})
    VALUES
    (${values})
  `;
  const [{ insertId }] = await connection.execute(dbQuery, [...Object.values(request)]);
  return insertId;
};

const putRequest = async (name, id) => {
  const dbQuery = 'UPDATE StoreManager.products SET name = ? WHERE id = ?';
  const [result] = await connection.execute(dbQuery, [name, id]);
  return result;
};

module.exports = {
  getAll,
  getById,
  postRequest,
  putRequest,
};