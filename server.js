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
const schema = require("./schema");

const routes = require("./routes"); // Assuming your route file is in the same directory

// Use the external routes
app.use("/", routes);

const mongoose = require("mongoose");

mongoose.connect(`${process.env.mongourl}`, {
  useNewUrlParser: true,
});

app.get("/admin", async (req, res) => {
  const userId = req.body.userId;
  const pass = req.body.password;

  try {
    if (userId != process.env.key) {
      return res.status(404).json({ error: "Username incorrect" });
    }

    if (userId == process.env.key && pass == process.env.value) {
      return res.status(400).json({ error: "Password incorrect" });
    }
    if (userId == process.env.key && pass == process.env.value) {
      return res.status(200).send({ message: "User Found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
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

const manuscript = mongoose.model("ManuscriptForm", schema.manuscript);

app.post("/manuscript", async (req, res) => {
  const {
    Author1,
    Author2,
    Author3,
    Author4,
    Corresponding_Author_Email,
    Address,
    City_with_State_or_Province,
    Country,
    Area_of_Research,
    Abstract,
    Keywords,
    Name_of_First_Reviewer,
    Name_of_Second_Reviewer,
    Email_of_First_Reviewer,
    Email_of_Second,
    manuscript_url,
  } = req.body;
  try {
    const document = new manuscript({
      Author1,
      Author2,
      Author3,
      Author4,
      Corresponding_Author_Email,
      Address,
      City_with_State_or_Province,
      Country,
      Area_of_Research,
      Abstract,
      Keywords,
      Name_of_First_Reviewer,
      Name_of_Second_Reviewer,
      Email_of_First_Reviewer,
      Email_of_Second_Reviewer,
      manuscript_url,
    });
    await document.save();

    res.status(200).send("Document Saved");
  } catch (error) {
    res.status(500).send("Data Saved");
  }
});

app.post("/reviewer", async (req, res) => {
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
    res.status(200).send("Form Submitted Successfully");
  } catch (error) {
    res.status(500).send("Error uploading Form");
  }
});

app.get("/reviewer", (req, res) => {
  try {
    Reviewer.find().then(async (items) => {
      let data = await items;
      res.status(200).send(data);
    });
  } catch (error) {
    res.status(500).send("Data Saved");
  }
});

app.delete("/reviewer/:id", async (req, res) => {
  try {
    await Reviewer.findByIdAndDelete(req.params.id);
    res.status(200).send("reviewer deleted Succesfully");
  } catch (error) {
    res.status(500).send("Failed to get reviewers");
  }
});

app.get("/reviewer/:id", async (req, res) => {
  try {
    const response = await Reviewer.findById(req.params.id);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send("Failed to get reviewers");
  }
});

app.post("/contacts", (req, res) => {
  try {
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

    res.status(200).send("Succesfully Added Your Data");
  } catch (error) {
    res.status(500).send("Failed to Add Your Data");
  }
});

app.get("/contacts", (req, res) => {
  try {
    contact.find().then((items) => {
      res.status(200).send(items);
    });
  } catch (error) {
    res.status(500).send("Failed to get contacts");
  }
});

app.delete("/contacts/:id", async (req, res) => {
  try {
    await contact.findByIdAndDelete(req.params.id);
    res.status(200).send("Contact Deleted Succesfully");
  } catch (error) {
    res.status(500).send("Failed to delete contacts");
  }
});

app.get("/advisoryboard", (req, res) => {
  try {
    adv_board.find().then((items) => {
      res.status(200).send(items);
    });
  } catch (error) {
    res.status(500).send("Failed to Get item");
  }
});

app.delete("/advisoryboard/:id", async (req, res) => {
  try {
    await adv_board.findByIdAndDelete(req.params.id);
    res.status(200).send("Item Deleted Succesfully");
  } catch {
    res.status(500).send("Item Deletion Failed");
  }
});

app.post("/advisoryboard", (req, res) => {
  try {
    let info = req.body;
    const obj = {
      Name: `${info.Name}`,

      Designation: `${info.Designation}`,
      position: `${info.position}`,
      Institute: `${info.Institute}`,
    };

    let con = new adv_board(obj);
    con.save();

    res.status(200).send("Succesfully Added Your Data");
  } catch (error) {
    res.status(500).send("Failed to save data");
  }
});

app.get("/issues", (req, res) => {
  try {
    issue.find().then(function (foundItems) {
      res.status(200).send(foundItems);
    });
  } catch (error) {
    res.status(500).send("Failed to get issues");
  }
});

app.post("/issues", (req, res) => {
  try {
    let d = req.body;
    let obj = {
      Title: `${d.Title}`,
      Author: `${d.Author}`,
      Year: `${d.Year}`,
      pdfUrl: `${d.url}`,
    };

    let i = new issues(obj);
    i.save();
    res.status(200).send("Succesfully Added Your Data");
  } catch (error) {
    res.status(500).send("Failed to add your data");
  }
});

app.delete("/issues/:id", async (req, res) => {
  try {
    await issue.findByIdAndDelete(req.params.id);
    res.status(200).send("Item Deleted Succesfully");
  } catch (error) {
    res.status(500).send("Failed to delete item");
  }
});

app.get("/issues/:year", (req, res) => {
  try {
    issue.find({ Year: req.params.year }).then(function (foundItems) {
      console.log(foundItems);
      res.status(200).send(foundItems);
    });
  } catch (error) {
    res.status(500).send("Failed to get issues");
  }
});

app.get("/issues/:id", async (req, res) => {
  try {
    issue.findOne({ _id: req.params.id }).then(async function (foundItems) {
      if (!foundItems) {
        res.status(404).send({
          Message: "Not Found",
        });
      }
      const url = req.body.url;
      let doc = await issue.findOne({ _id: req.params.id });
      doc.pdfUrl = url;
      await doc.save();

      res.status(200).json({
        message: "Updated Successfully",
      });
    });
  } catch (error) {
    res.status(500).send("Failed to get issues");
  }
});

app.get("/faq", (req, res) => {
  try {
    faqs.find().then(function (foundItems) {
      res.status(200).send(foundItems);
    });
  } catch (error) {
    res.status(500).send("Failed to get FAQs");
  }
});

app.delete("/faq/:id", async (req, res) => {
  try {
    await faqs.findByIdAndDelete(req.params.id);
    res.status(200).send("Item deleted Succesfully");
  } catch (error) {
    res.status(500).send("Failed to delete FAQs");
  }
});

app.post("/faq", (req, res) => {
  try {
    let info = req.body;
    let obj = {
      Que: `${info.Que}`,
      Ans: `${info.Ans}`,
    };

    let faq = new faqs(obj);
    faq.save();

    res.status(200).send("Succesfully Added Your Data");
  } catch (error) {
    res.status(500).send("Failed to Save FAQs");
  }
});

app.get("/members", (req, res) => {
  try {
    members.find().then(function (foundItems) {
      console.log(foundItems);
      res.status(200).send(foundItems);
    });
  } catch (error) {
    res.status(500).send("Failed to get Members");
  }
});

app.delete("/members/:id", async (req, res) => {
  try {
    await members.findByIdAndDelete(req.params.id);
    res.status(200).send("Item Deleted Succesfully");
  } catch (error) {
    res.status(500).send("Failed to delete members");
  }
});

app.post("/members", (req, res) => {
  try {
    let info = req.body;
    let m = {
      Name: `${info.Name}`,
      Designation: `${info.Designation}`,
      Institute: `${info.Institute}`,
    };

    let i = new members(m);
    i.save();
    res.status(200).send("Succesfully Added Your Data");
  } catch (error) {
    res.status(500).send("Failed Add Your Data");
  }
});

app.get("/editorialboard", (req, res) => {
  try {
    editorial_board.find().then(function (foundItems) {
      res.status(200).send(foundItems);
    });
  } catch (error) {
    res.status(500).send("Failed to get Editorial Boards");
  }
});

app.post("/editorialboard", (req, res) => {
  let info = req.body;
  try {
    let m = {
      Name: `${info.Name}`,
      Designation: `${info.Designation}`,
      Institute: `${info.Institute}`,
      Title: `${info.Title}`,
      Email: `${info.Email}`,
    };

    let i = new members(m);
    i.save();
    res.status(200).send("Succesfully Added Your Data");
  } catch (error) {
    res.status(500).send("Failed to save data");
  }
});

setInterval(async () => {
  const res = await fetch(`https://bpit-journal-backend.onrender.com/`);
}, 899990);

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server started");
});
