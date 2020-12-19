const firebase = require("../../database/FirebaseConfig");
const error = require("../../utils/errors");

// Global Variables
// 1. Initialize the Firestore
const db = firebase.firestore();
// 2. Create Auth reference
const quoteRef = db.collection("quote");

// For testing only => Can be removed
exports.test = (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "This route is only for testing purpose.",
  });
};

// Post A Quote
exports.postQuote = async (req, res) => {
  const { data } = req.body;
  console.log(data);

  // Add quote
  await quoteRef
    .add({
      ...data,
      date: Date.now(),
    })
    .then(() => {
      res.status(200).json({
        status: "Success",
        message: "Car quote added successfully",
      });
    });
};

// Get All Quotes
exports.getAllQuotes = async (req, res) => {
  let allQuotesData = [];
  // Add quote
  await quoteRef.get().then((snapshot) => {
    snapshot.forEach((quote) => {
      allQuotesData.push({
        id: quote.id,
        quoteData: quote.data(),
      });
    });
  });

  res.status(200).json({
    status: "Success",
    data: allQuotesData,
  });
};
