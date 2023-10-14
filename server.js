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

let contacts = [
  {
    id: 1,
    Name: "Prof. Payal Pahwa",
    Title: "Editor-in-Chief",
    Bodh: "BODH: BPIT International Journal of Technology and Management",
    Designation:
      "Principal, Bhagwan Parshuram Institute of Technology  PSP-4, Dr KN Katju Marg, Sector 17, Rohini, New Delhi, Delhi 110089",
    Email: "principal@bpitindia.com",
    Phone: "(011) 2757 2900",
  },
  {
    id: 1,
    Name: "Dr. Narina Thakur",
    Title: "Managing Editor",
    Bodh: "BODH: BPIT International Journal of Technology and Management",
    Designation:
      " Dean R&D and Associate Professor,  CSE  Bhagwan Parshuram Institute of Technology PSP-4 , Dr KN Katju Marg, Sector 17, Rohini, New Delhi, Delhi 110089",
    Email: "narinathakur@bpitindia.com",
    Phone: "0000000000",
  },
];
contacts = contacts.json();
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
  res.send(contacts);
});

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server started");
});
