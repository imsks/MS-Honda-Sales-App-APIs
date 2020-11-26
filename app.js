const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// 1. User Imports
const userAuth = require("./routes/users/auth");

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json());

// 1. User Base Routes
app.use("/api/user/auth", userAuth);

module.exports = app;
