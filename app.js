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

app.use("/users", schoolsRoute);

//CONNECT TO DATABASE
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("The database is connected!")
);

//START LISTENING TO THE SERVER
app.listen(3000);
