const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  userId: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  reservations: {
    type: [
      {
        id: Number,
        restaurant: String,
        date: String,
        time: String,
        guests: Number,
        mobile: String,
        requests: String,
        status: String,
      },
    ],
  },
});
module.exports = mongoose.model("User", UserSchema);
