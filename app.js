const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

//PASS BODYPARSER AS MIDDLEWARE
app.use(bodyParser.json());

//ROUTES
app.get("/", (req, res) => {
  res.send("We are on Home");
});

//IMPORT ROUTE
const schoolsRoute = require("./routes/schools");
app.use("/schools", schoolsRoute);
const usersRoute = require("./routes/users");
app.use("/users", usersRoute);

//CONNECT TO DATABASE
mongoose.connect(
  "mongodb+srv://new-user-01:H3GoK3PzTljTRaw9@cocoflosbachdb.zynrz.mongodb.net/schoolDB?retryWrites=true&w=majority",
  () => console.log("The database is connected!")
);

//START LISTENING TO THE SERVER
const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log("Listening on Port" + port);
});
