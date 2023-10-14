const express = require("express");
const bodyparser = require("body-parser");

const app = express();
const cors = require("cors");
const path = require("path");
// app.use(express.static("public"));
require("dotenv").config();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
const mongoose = require("mongoose");
mongoose.connect(`${process.env.mongourl}`, {
  useNewUrlParser: true,
});

app.get("/", (req, res) => {
  const status = {
    Status: "Running",
  };

  res.send(status);
});

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server started");
});
