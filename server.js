const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const ejs = require("ejs");
const ejsLayout = require("express-ejs-layouts");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

// DATABASE

mongoose.connect("mongodb://localhost:27017/USERINTERFACE", {
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const connection = mongoose.connection;
connection
  .once("open", () => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("Failed to connect db");
  });

// a



// assets path
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// body parser
app.use(bodyparser.urlencoded({ extended: false }));
// Express Engine
app.use(ejsLayout);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// importing route
require("./routes/route")(app);


// port on
app.listen(port, () => {
  console.log("server is up on port,", port);
});
