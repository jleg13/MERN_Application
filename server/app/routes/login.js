const router = require('express').Router();
const loginController = require("../controllers/loginController");
const loginValidator = require('../services/loginValidation');

router.get('/:id.:password', loginController.read_userlist_user);

module.exports = router;