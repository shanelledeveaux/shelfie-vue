const addProduct = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { name, price, imageurl } = req.body;

  dbInstance
    .add_product([name, price, imageurl])
    .then(response => res.status(200).send(response))
    .catch(console.log);
};

const getInventory = (req, res) => {
  const dbInstance = req.app.get("db");

  dbInstance
    .get_inventory()
    .then(response => res.status(200).send(response))
    .catch(console.log);
};

const editProduct = (req, res, next) => {
  console.log(req.params);
  console.log(req.body);
  const dbInstance = req.app.get("db");
  const { id } = req.params;
  const { name, price, imageurl } = req.body;

  dbInstance
    .edit_product([id, name, price, imageurl])
    .then(response => res.status(200).send(response))
    .catch(console.log);
};

module.exports = {
  addProduct,
  getInventory,
  editProduct
};
