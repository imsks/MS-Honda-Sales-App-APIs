const bcrypt = require("bcrypt");
const firebase = require("../../database/FirebaseConfig");
const error = require("../../utils/errors");

// Global Variables
// 1. Initialize the Firestore
const db = firebase.firestore();
// 2. Create Auth reference
const authRef = db.collection("auth");

// For testing only => Can be removed
exports.test = (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "This route is only for testing purpose.",
  });
};

// User Sign In Route
exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  // 0. Check if user has submitted correct data
  if (!email) {
    res.status(400).json({
      status: "Fail",
      message: error.errorMessages.nullEmail,
    });
    return;
  }

  if (!password) {
    res.status(400).json({
      status: "Fail",
      message: error.errorMessages.nullPassword,
    });
    return;
  }

  // 1. Check if user exists
  const query = await authRef.where("email", "==", email).get();
  if (query.empty) {
    res.status(400).json({
      status: "Fail",
      message: error.errorMessages.signinFailed,
    });
  } else {
    const snapshot = query.docs[0];
    const user = snapshot.data();
    bcrypt.compare(password, user.password, function (err, result) {
      let data = {};
      data = user;
      data.userId = snapshot.id;
      // Passoword correct
      if (result) {
        res.status(200).json({
          status: "Success",
          message: "Signing in successful.",
          data,
        });
      } else {
        res.status(400).json({
          status: "Fail",
          message: error.errorMessages.signinFailed,
        });
      }
    });
  }
};

// User Sign Up
exports.signUp = async (req, res) => {
  const { name, email, profession, password } = req.body;

  // 0. Check if user has submitted correct data
  if (!name) {
    res.status(400).json({
      status: "Fail",
      message: error.errorMessages.nullName,
    });
    return;
  }

  if (!email) {
    res.status(400).json({
      status: "Fail",
      message: error.errorMessages.nullEmail,
    });
    return;
  }

  if (!password) {
    res.status(400).json({
      status: "Fail",
      message: error.errorMessages.nullPassword,
    });
    return;
  }

  // 1. Check if user already exists
  const snapshot = await authRef.where("email", "==", email).get();
  if (!snapshot.empty) {
    // User already exist
    res.status(400).json({
      status: "Fail",
      message: error.errorMessages.userAlreadyExists,
    });
  } else {
    bcrypt.hash(password, 10, async function (err, hash) {
      // 1. Store hash in your password DB.
      await authRef.add({
        name,
        email,
        profession,
        password: hash,
      });

      // 2. Get the current user data
      const query = await authRef.where("email", "==", email).get();
      const snapshot = query.docs[0];
      const user = snapshot.data();

      // 3. Send the user data
      res.status(200).json({
        status: "Success",
        message: "You've been signed up.",
        user,
      });
    });
  }
};
