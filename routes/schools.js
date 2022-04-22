const express = require("express");
const router = express.Router();
const School = require("../models/schoolsModel");

// GET LIST OF ALL SCHOOLS
router.get("/", async (req, res) => {
  try {
    const posts = await School.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", (req, res) => {
  const post = new School({
    Name: req.body.Name,
    Description: req.body.Description,
    Address: req.body.Address,
    Classes: req.body.Classes,
    Tuition: req.body.Tuition,
    Contact: req.body.Contact,
    Website: req.body.Website,
  });
  post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: error });
    });
});

module.exports = router;
