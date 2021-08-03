const express = require('express');
const router = express.Router();
const restuarantController = require("../controllers/booking-controller");

// helloworld route
router.get("/", restuarantController.hello);
router.get('/', restuarantController.read_watchlist_list);
router.get('/:id', restuarantController.read_watchlist_item);
router.post('/', restuarantController.create_watchlist_item);
router.put('/:id', restuarantController.update_watchlist_item);
router.delete('/:id', restuarantController.delete_watchlist_item);
// create data route
// router.post("/create", crudController.createCrud);
// // display data route
// router.get("/fetch", crudController.fetchCrud);
// // edit data route
// router.get("/edit/:id", crudController.editCrud);
// // update data route
// router.post("/edit/:id", crudController.UpdateCrud);
// // delete data route
// router.get("/delete/:id", crudController.deleteCrud);



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
