// const { validationResult } = require("express-validator");
const restaurantModel = require("../models/Restaurant");
const userModel = require("../models/User");

exports.read_userlist_user = (req, res) => {
  res.status(200).json(req.params);
};

