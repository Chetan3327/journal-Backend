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

const routes = require("./routes"); // Assuming your route file is in the same directory

// Use the external routes
app.use("/", routes);
const schema = require("./schema");

const mongoose = require("mongoose");

mongoose.connect(`${process.env.mongourl}`, {
  useNewUrlParser: true,
});

// data.editorial_board.forEach((element) => {
//   let a = new editorial_board(element);
//   a.save();
// });

// app.get("/contacts", (req, res) => {
//   contact.find().then(function (foundItems) {
//     res.send(foundItems);
//   });
// });

const faqs = mongoose.model("BPITJOURNAL", schema.schema);

const adv_board = mongoose.model("advisory_board", schema.advisory_board);

const issue = mongoose.model("Issues", schema.issues);

const members = mongoose.model("Members", schema.memberschema);

const contact = mongoose.model("Contacts", schema.contacts);

const editorial_board = mongoose.model("Editorial_board", schema.eboard);
const Reviewer = mongoose.model("REVIEWER", schema.receiver);

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app.post("/reviewer", upload.single("document"), async (req, res) => {
  let info = req.body;
  try {
    const document = new Reviewer({
      Email: info.Email,
      Full_Name: info.Full_Name,
      Designation: info.Designation,
      Contact: info.contact,
      Area_of_Interest_Discipline: info.Area_of_Interest_Discipline,
      Institute_Name_Address: info.Institute_Name_Address,
      Institute_Website: info.Institute_Website,
      CV: info.CV,
    });
    await document.save();
    res.send("Form Submitted Successfully");
  } catch (error) {
    res.status(500).send("Error uploading document");
  }
});

app.get("/reviewer", async (req, res) => {
  Reviewer.find().then(async (items) => {
    let data = await items;
    res.send(data);
  });
});

app.delete("/reviewer/:id", async (req, res) => {
  await Reviewer.findByIdAndDelete(req.params.id);
  res.send("reviewer deleted Succesfully");
});

app.get("/reviewer/:id", async (req, res) => {
  const response = await Reviewer.findById(req.params.id);
  res.send(response);
});

app.post("/contacts", (req, res) => {
  let info = req.body;
  const obj = {
    Name: `${info.Name}`,
    Title: `${info.Title}`,
    Bodh: `${info.Bodh}`,
    Designation: `${info.Designation}`,
    Email: `${info.Email}`,
    Phone: `${info.Phone}`,
  };

  let con = new contact(obj);
  con.save();

  res.send("Succesfully Added Your Data");
});

app.get("/contacts", (req, res) => {
  contact.find().then((items) => {
    res.send(items);
  });
});

app.delete("/contacts/:id", async (req, res) => {
  await contact.findByIdAndDelete(req.params.id);
  res.send("Contact Deleted Succesfully");
});

app.get("/board/advisoryboard", (req, res) => {
  adv_board.find().then((items) => {
    res.send(items);
  });
});

app.delete("/board/advisoryboard/:id", async (req, res) => {
  await adv_board.findByIdAndDelete(req.params.id);
  res.send("Item Deleted Succesfully");
});

app.post("/board/advisoryboard", (req, res) => {
  let info = req.body;
  const obj = {
    Name: `${info.Name}`,

    Designation: `${info.Designation}`,
    position: `${info.position}`,
    Institute: `${info.Institute}`,
  };

  let con = new adv_board(obj);
  con.save();

  res.send("Succesfully Added Your Data");
});

app.get("/issues", (req, res) => {
  issue.find().then(function (foundItems) {
    res.send(foundItems);
  });
});

app.post("/issues", (req, res) => {
  let d = req.body;
  let obj = {
    Title: `${d.Title}`,
    Author: `${d.Author}`,
    Year: `${d.Year}`,
  };

  app.delete("/issues/:id", async (req, res) => {
    await issue.findByIdAndDelete(req.params.id);
    res.send("Item Deleted Succesfully");
  });

  let i = new issues(obj);
  i.save();
  res.send("Succesfully Added Your Data");
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

app.delete("/board/members/:id", async (req, res) => {
  await members.findByIdAndDelete(req.params.id);
  res.send("Item Deleted Succesfully");
});

app.post("/board/members", (req, res) => {
  let info = req.body;
  let m = {
    Name: `${info.Name}`,
    Designation: `${info.Designation}`,
    Institute: `${info.Institute}`,
  };

  let i = new members(m);
  i.save();
  res.send("Succesfully Added Your Data");
});

app.get("/board/editorialboard", (req, res) => {
  editorial_board.find().then(function (foundItems) {
    res.send(foundItems);
  });
});

app.post("/board/editorialboard", (req, res) => {
  let info = req.body;
  let m = {
    Name: `${info.Name}`,
    Designation: `${info.Designation}`,
    Institute: `${info.Institute}`,
    Title: `${info.Title}`,
    Email: `${info.Email}`,
  };

  let i = new members(m);
  i.save();
  res.send("Succesfully Added Your Data");
});

setInterval(async () => {
  const res = await fetch(`https://bpit-journal-backend.onrender.com/`);
}, 899990);

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server started");
});
