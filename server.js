const express = require("express");
const bodyparser = require("body-parser");
const data = require("./data");
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

app.get("/contacts", (req, res) => {
  res.send(data.contacts);
});

app.get("/board/advisoryboard", (req, res) => {
  res.send(data.advisory_board);
});
app.get("/issues", (req, res) => {
  res.send(data.issues);
});
app.get("/faq", (req, res) => {
  res.send(data.FAQ);
});

app.post("/faq", (req, res) => {
  let info = req.body;
  let obj = {
    Que: `${info.Que}`,
    Ans: `${info.Ans}`,
  };
  data.FAQ.push(obj);
});

app.get("/board/members", (req, res) => {
  res.send(data.members);
});

app.get("/board/editorialboard", (req, res) => {
  res.send(data.editorial_board);
});

setInterval(async () => {
  const res = await fetch(`https://bpit-journal-backend.onrender.com/`);
}, 899990);

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server started");
});
