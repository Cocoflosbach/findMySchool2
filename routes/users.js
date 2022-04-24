const express = require("express");
const router = express.Router();
const User = require("../models/usersModel");

//GET LIST OF ALL USERS
router.get("/", async (req, res) => {
  try {
    const posts = await User.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// ADD A NEW USER
router.post("/", async (req, res) => {
  const post = new User({
    Username: req.body.Username,
    Password: req.body.Password,
    Email: req.body.Email,
    Birthday: req.body.Birthday,
  });
  console.log(post);
  try {
    const savedUser = await post.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: error });
  }
});

// GET USER DETAILS BY USERNAME
router.get("/:Username", async (req, res) => {
  console.log(req.params.Username);
  try {
    const post = await User.findOne({ Username: req.params.Username });
    res.json(post);
  } catch (err) {
    res.status(500).send("Error: " + err);
  }
});

//UPDATE USER INFORMATION
router.patch("/:Username", async (req, res) => {
  console.log(req.params.Username);
  try {
    const updatedUser = await User.updateOne(
      { Username: req.params.Username },
      {
        $set: {
          Username: req.body.Username,
          Password: req.body.Password,
          Email: req.body.Email,
          Birthday: req.body.Birthday,
        },
      }
    );
    res.json(updatedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

//ADD SCHOOL TO USER'S FAVORITE LIST
router.post("/:Username/schools/:SchoolID", async (req, res) => {
  console.log(req.params.Username);
  try {
    const userFavorites = User.findOneAndUpdate(
      {
        Username: req.params.Username,
      },
      { $push: { FavoriteSchools: req.params.SchoolID } },
      {
        new: true,
      }
    );
    res.json(userFavorites);
  } catch (err) {
    res.json({ message: err });
  }
});

//DELETE A USER
router.delete("/:Username", async (req, res) => {
  try {
    const deletedUser = await User.findOneAndDelete({
      Username: req.params.Username,
    });
    res.json(deletedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
