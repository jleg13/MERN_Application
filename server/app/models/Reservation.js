const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ReservationSchema = new Schema({
  _id: Schema.Types.ObjectId,
  userId: {
    type: String,
    require: true,
  },
  restaurant: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  time: {
    type: String,
    require: true,
  },
  guests: {
    type: Number,
    require: true,
  },
  mobile: {
    type: String,
    require: true,
  },
  requests: {
    type: String,
  },
  status: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("Reservation", ReservationSchema);
