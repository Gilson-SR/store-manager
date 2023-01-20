const postProductValidation = (parameter) => {
  if (!parameter) return { status: 400, response: { message: '"name" is required' } };
  if (parameter.length <= 5) {
    return {
      status: 422,
      response: { message: '"name" length must be at least 5 characters long' },
    };
  }
};

module.exports = {
  postProductValidation,
};