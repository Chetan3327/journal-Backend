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
const { warn } = require("console");
mongoose.connect(`${process.env.mongourl}`, {
  useNewUrlParser: true,
});

const schema = {
  Que: String,
  Ans: String,
};

const faqs = mongoose.model("BPITJOURNAL", schema);

const advisory_board = {
  Name: String,
  Designation: String,
  Institute: String,
  position: String,
};

const adv_board = mongoose.model("advisory_board", advisory_board);

const issues = {
  Title: String,
  Author: String,
  Year: Number,
};

const issue = mongoose.model("Issues", issues);

const memberschema = {
  Name: String,
  Designation: String,
  Institute: String,
};

const members = mongoose.model("Members", memberschema);

const contacts = {
  Name: String,
  Title: String,
  Bodh: String,
  Designation: String,
  Email: String,
  Phone: String,
};

const contact = mongoose.model("Contacts", contacts);

const eboard = {
  Name: String,
  Title: String,
  Area_of_Specialization: String,
  Designation: String,
  Institute: String,
  Email: String,
};

const editorial_board = mongoose.model("Editorial_board", eboard);

// data.editorial_board.forEach((element) => {
//   let a = new editorial_board(element);
//   a.save();
// });

app.get("/", (req, res) => {
  const status = {
    Status: "Running",
  };

  res.send(status);
});

app.get("/contacts", (req, res) => {
  contact.find().then(function (foundItems) {
    res.send(foundItems);
  });
});

app.get("/board/advisoryboard", (req, res) => {
  res.send(data.advisory_board);
});
app.get("/issues", (req, res) => {
  issue.find().then(function (foundItems) {
    res.send(foundItems);
  });
});

app.get("/issues/:year", (req, res) => {
  issue.find({ Year: req.params.year }).then(function (foundItems) {
    console.log(foundItems);
    res.send(foundItems);
  });
});

app.get("/faq", (req, res) => {
  faqs.find().then(function (foundItems) {
    res.send(foundItems);
  });
});

app.delete("/faq/:id", async (req, res) => {
  await faqs.findByIdAndDelete(req.params.id);
  res.send("Item deleted Succesfully");
});

app.post("/faq", (req, res) => {
  let info = req.body;
  let obj = {
    Que: `${info.Que}`,
    Ans: `${info.Ans}`,
  };

  let faq = new faqs(obj);
  faq.save();

  res.send("Succesfully Added Your Data");
});

app.get("/board/members", (req, res) => {
  members.find().then(function (foundItems) {
    res.send(foundItems);
  });
});

app.get("/board/editorialboard", (req, res) => {
  editorial_board.find().then(function (foundItems) {
    res.send(foundItems);
  });
});

setInterval(async () => {
  const res = await fetch(`https://bpit-journal-backend.onrender.com/`);
}, 899990);

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server started");
});
