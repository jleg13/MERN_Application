const express = require('express');
const router = express.Router();
const loginController = require("../controllers/login-controller");
const loginValidator = require("../services/login-services");

// helloworld route
router.get("/", loginController.hello);
router.get('/', loginController.read_watchlist_list);
router.get('/:id', loginController.read_watchlist_item);
router.post('/', loginValidator.validateData, loginController.create_watchlist_item);
router.put('/:id', loginController.update_watchlist_item);
router.delete('/:id', loginController.delete_watchlist_item);


const { stockValidator } = require("../../validator");
router.post("/stocks", (req, res) => {
  if (stockValidator(req.body.ticker)) {
    let data = req.body;
    data.id = 1234;
    res.status(201).json(data);
  }
  res.status(400).json({ error: "This stock does not exist!" });
});
// error handling
router.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.status(err.status || 500);
  res.send(err);
});

module.exports = router;
