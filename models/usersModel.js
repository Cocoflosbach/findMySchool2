const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  Username: { type: String, required: true },
  Password: { type: String, required: true },
  Email: { type: String, required: true },
  Birthday: Date,
  FavoriteSchools: [{ type: mongoose.Schema.Types.ObjectId, ref: "School" }],
});

module.exports = mongoose.model("Users", UserSchema);
