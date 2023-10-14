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
    id: 2,
    Name: "Dr. Narina Thakur",
    Title: "Managing Editor",
    Bodh: "BODH: BPIT International Journal of Technology and Management",
    Designation:
      " Dean R&D and Associate Professor,  CSE  Bhagwan Parshuram Institute of Technology PSP-4 , Dr KN Katju Marg, Sector 17, Rohini, New Delhi, Delhi 110089",
    Email: "narinathakur@bpitindia.com",
    Phone: "0000000000",
  },
];

let board = {
  advisory_board: [
    {
      Name: "HON’BLE SH. ATAM PRAKASH KAUSHIK",
      Designation: "CHAIRMAN",
      Institute: "Bhagwan Parshuram Institute of Technology Delhi",
      position: "Chief Patron",
    },
    {
      Name: "SH. SURENDRA SHARMA",
      Designation: "Vice President",
      Institute: "Bhagwan Parshuram Institute of Technology Delhi.",
      position: "Patron",
    },
    {
      Name: "SH. VINOD VATS",
      Designation: "General Secretary",
      Institute: "Bhagwan Parshuram Institute of Technology Delhi",
      position: "Patron",
    },
    {
      Name: "PROF. PAYAL PAHWA",
      Designation: "PRINCIPAL",
      Institute: "Bhagwan Parshuram Institute of Technology Delhi",
      position: "Editor-in-Chief ",
    },
    {
      Name: "PROF. A. K. TANDON",
      Designation: "Founder Director",
      Institute: "Bhagwan Parshuram Institute of Technology Delhi",
      position: "Advisor",
    },
    {
      Name: "PROF. Y.D GAUR",
      Designation: "EXECUTIVE",
      Institute: "Bhagwan Parshuram Institute of Technology Delhi",
      position: "Advisor",
    },
  ],

  members: [
    {
      Name: "Dr. Abid Haleem",
      Designation: "Professor",
      Institute:
        "Department of Mechanical Engineering, College of Engineering and Technology, Jamia Millia Islamia, New Delhi",
    },
    {
      Name: "Dr S K Garg",
      Designation: "Professor",
      Institute:
        "Department of Management Studies, Delhi Technological University, Delhi",
    },
    {
      Name: "Dr. Ajai Agrawal",
      Designation: "Professor",
      Institute:
        "Department of Mechanical Engineering, GB Pant University, Pantnagar",
    },
    {
      Name: "Dr. Sushil",
      Designation: "Professor",
      Institute: "Department of Management Studies, IIT-Delhi",
    },
    {
      Name: "Dr. M C Gupta",
      Designation: "Professor",
      Institute: " Department of Management Studies, IIT-Delhi",
    },
    {
      Name: "Mr. Yatindra Sharma",
      Designation: "Professor",
      Institute:
        "Department of Mechanical Engineering, College of Engineering and Technology, Jamia Millia Islamia, New Delhi",
    },
    {
      Name: "Mr. Saumitra Sharma",
      Designation: "PGDM (I I M Ahmadabad)",
      Institute: "PGDM (I I M Ahmadabad), Professional U S A",
    },
    {
      Name: "Mr. Shantanu Sharma",
      Designation: "PGDM (I I M Ahmadabad)",
      Institute: "PGDM (I I M Ahmadabad), Professional U S A",
    },
    {
      Name: "Professor Chin-Chen Chang",
      Designation: "PROFESSOR",
      Institute:
        "Department of information Engineering and Computer Science, Feng Chia University, Taiwan",
    },
    {
      Name: "Dr Rana Singh",
      Designation: "Assistant Director",
      Institute:
        "Institutional Research and Planning Gulf Medical University, Ajman, UAE",
    },
    {
      Name: "Prof. Arif Suhail",
      Designation: "PROFESSOR",
      Institute:
        " Department of Mechanical Engineering, Aligarh Muslim University",
    },
    {
      Name: "Prof. Sanjeev Mittal",
      Designation: "PROFESSOR",
      Institute:
        " University School of Management Studies, Guru Gobind Singh Indraprastha University, Delhi",
    },
    {
      Name: "Dr. Rajeev Jain",
      Designation: "Professor & Director of Chemistry",
      Institute: "Institute of Engineering, Gwalior",
    },
    {
      Name: "Dr. Neeraj Kaushik",
      Designation: "Associate Professor",
      Institute: "NIT, Kurukshetra",
    },
    {
      Name: "Dr. Chitra Sharma",
      Designation: "Professor",
      Institute: "(Formerly at IGTUW, Delhi) Philadelphia (U S A)",
    },
    {
      Name: "Prof. Rajiv Sharma",
      Designation: "Professor",
      Institute:
        "Deputy Director and HOD (ECE) Bhagwan Parshuram Institute of Technology New Delhi.",
    },
    {
      Name: "Prof. Achal Kaushik",
      Designation: "Professor and Dean Academics",
      Institute: "Bhagwan Parshuram Institute of Technology New Delhi.",
    },
    {
      Name: "Prof. Achal Kaushik",
      Designation: "Professor and HOD (IT)",
      Institute: "Bhagwan Parshuram Institute of Technology New Delhi.",
    },
  ],
};

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

app.get("/board", (req, res) => {
  res.send(board);
});

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server started");
});
