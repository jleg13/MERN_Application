const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const RestaurantSchema = new Schema({
  id: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  cuisine: {
    type: String,
    require: true,
  },
  info: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  schedule: {
    type: [
      {
        day: Number,
        times: [{ time: String, tables: [String] }],
        max: Number,
      },
    ],
    require: true,
  },
});
module.exports = mongoose.model("Restaurant", RestaurantSchema);
