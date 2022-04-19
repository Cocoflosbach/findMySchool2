const mongoose = require("mongoose");

const SchoolSchema = mongoose.Schema({
  Name: { type: String, required: true },
  Description: { type: String, required: true },
  Address: { type: String, required: true },
  Classes: String,
  Tuition: String,
  Contact: String,
  Website: String,
});

module.exports = mongoose.model("Schools", SchoolSchema);
