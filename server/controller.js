const addProduct = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { name, price, imageurl } = req.body;

  dbInstance
    .add_product([name, price, imageurl])
    .then(response => res.status(200).send(response))
    .catch(console.log);
};

module.exports = {
  addProduct
};
