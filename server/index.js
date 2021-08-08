const express = require("express");
const mongoose = require("mongoose");
const searchRouter = require("./app/routes/search");
const loginRouter = require("./app/routes/login");
const bookingRouter = require("./app/routes/booking");
const restaurantsRouter = require("./app/routes/restaurants");

const port = process.env.PORT || 3000;

// Set up Database
const {
  MONGO_IP,
  MONGO_PORT,
  MONGO_USERNAME,
  MONGO_PASSWORD,
} = require("./config/config");
const mongoDbUrl = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}`;
mongoose
  .connect(mongoDbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.error(err));
mongoose.set("useFindAndModify", false);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database!"));

// Set up Express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/search", searchRouter);
app.use("/login", loginRouter);
app.use("/booking", bookingRouter);
app.use("/restaurants", restaurantsRouter);

app.listen(port, () => console.log(`Express is listening on port ${port}!`));
