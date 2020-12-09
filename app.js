const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// 1. User Imports
const userAuth = require("./routes/users/auth");
const userQuote = require("./routes/users/quote");
// 1. Admin Imports
const adminAuth = require("./routes/admin/auth");
const adminCars = require("./routes/admin/cars");

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json());

// 1. User Routes
app.use("/api/user/auth", userAuth);
app.use("/api/user/quote", userQuote);

// 2. Admin Routes
app.use("/api/admin/auth", adminAuth);
app.use("/api/admin/cars", adminCars);
app.use("/api/admin/quote", adminCars);

module.exports = app;
