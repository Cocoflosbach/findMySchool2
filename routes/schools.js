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

// POST NEW SCHOOL INFORMATION
router.post("/", async (req, res) => {
  const post = new School({
    Name: req.body.Name,
    Description: req.body.Description,
    Address: req.body.Address,
    Classes: req.body.Classes,
    Tuition: req.body.Tuition,
    Contact: req.body.Contact,
    Website: req.body.Website,
    ImagePath: req.body.ImagePath,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }

  /* post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: error });
    }); */
});

// GET A SPECIFIC SCHOOL BY NAME

router.get("/:Name", async (req, res) => {
  console.log(req.params.Name);
  try {
    const post = await School.findOne({ Name: req.params.Name });
    res.json(post);
  } catch (err) {
    res.status(500).send("Error: " + err);
  }
});

// DELETE A SPECIFIC SCHOOL BY NAME
router.delete("/:Name", async (req, res) => {
  try {
    const deletedPost = await School.findOneAndDelete({
      Name: req.params.Name,
    });
    res.json(deletedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// UPDATE SCHOOL INFORMATION
router.patch("/:Name", async (req, res) => {
  try {
    const updatedPost = await School.updateOne(
      { Name: req.params.Name },
      {
        $set: {
          Name: req.body.Name,
          Description: req.body.Description,
          Address: req.body.Address,
          Classes: req.body.Classes,
          Tuition: req.body.Tuition,
          Contact: req.body.Contact,
          Website: req.body.Website,
          ImagePath: req.body.ImagePath,
        },
      }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
