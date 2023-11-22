const express = require("express");
const router = express.Router();

// Define your routes here
router.get("/", (req, res) => {
  res.download("20201019_092850.jpg");
});

router.get("/about", (req, res) => {
  res.send("About us");
});

module.exports = router;
