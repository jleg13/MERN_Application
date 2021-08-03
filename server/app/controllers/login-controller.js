const { validationResult } = require("express-validator");
const loginModel = require("../models/login-model");
const loginServices = require("../services/login-services");

// module.exports = {
//   crudForm: function (req, res) {
//     res.render("crud-operation");
//   },
//   createCrud: function (req, res) {
//     const createData = crudModel.createCrud();
//     res.send("<h1>" + createData + "</h1>");
//   },
//   fetchCrud: function (req, res) {
//     const fetchData = crudModel.fetchCrud();
//     res.send("<h1>" + fetchData + "</h1>");
//   },
//   editCrud: function (req, res) {
//     const editId = req.params.id;
//     const editData = crudModel.editCrud(editId);
//     res.render("crud-operation", { editData: editData, editId: editId });
//   },
//   UpdateCrud: function (req, res) {
//     const updateId = req.params.id;
//     const updateData = crudModel.UpdateCrud(updateId);
//     res.send("<h1>" + updateData + "</h1>");
//   },
//   deleteCrud: function (req, res) {
//     const deleteId = req.params.id;
//     const deleteData = crudModel.deleteCrud(deleteId);
//     res.send("<h1>" + deleteData + "</h1>");
//   },
// };

module.exports = {
  hello: (req, res) => {
    res.status(201).json({ message: "Hello World!" });
  },
};

const Stock = require("../models/stock");
exports.read_watchlist_list = (req, res) => {
  res.status(501).end();
};
exports.read_watchlist_item = (req, res) => {
  res.status(501).end();
};
exports.create_watchlist_item = async (req, res) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  if (!isTickerExist(req.body.ticker)) {
    let err = {
      value: req.body.ticker,
      msg: "ticker does not exist",
      param: "ticker",
      location: "body",
    };
    return res.status(400).json({ errors: [err] });
  }
  let stock = new Stock({
    ticker: req.body.ticker,
  });
  if (req.body.description) stock.description = req.body.description;
  let found_stock = await Stock.findOne({ ticker: req.body.ticker }).exec();
  // Create a new item only if it is not in DB
  if (found_stock) {
    let err = {
      value: stock.ticker,
      msg: "ticker is already on the watchlist",
      param: "ticker",
      location: "body",
    };
    return res.status(400).json({ errors: [err] });
  } else {
    let output_stock = await stock.save();
    if (output_stock) {
      return res.status(201).json(output_stock);
    }
    // In case, something went wrong
    res.status(400).json({ errors: [err] });
  }
};
exports.update_watchlist_item = (req, res) => {
  res.status(501).end();
};
exports.delete_watchlist_item = (req, res) => {
  res.status(501).end();
};
