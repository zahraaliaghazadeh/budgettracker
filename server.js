const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 8085;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URL ||
  // "mongodb://user1:password1@ds133378.mlab.com:33378/heroku_5n7pz53x", {
    "mongodb://user:password1@ds149373.mlab.com:49373/heroku_9rh9ln2z",{
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});