require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
require("./db/conn");
const users = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/route");

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json("server start");
});

app.use(router);
//app.use(users);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is starting on port ${port}`);
});
