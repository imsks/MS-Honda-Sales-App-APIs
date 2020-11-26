const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// 1. User Imports
const userAuth = require("./routes/users/auth");
// 1. Admin Imports
const adminAuth = require("./routes/admin/auth");
const adminCars = require("./routes/admin/cars");

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json());

// 1. User Routes
app.use("/api/user/auth", userAuth);

// 2. Admin Routes
app.use("/api/admin/auth", adminAuth);
app.use("/api/admin/cars", adminCars);

module.exports = app;
