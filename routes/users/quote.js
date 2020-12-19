const router = require("express").Router();
const quoteController = require("../../controllers/user/quote");

// For testing only
router.route("/test").get(quoteController.test);

// For Quote
router.route("/set-quote-for-customer").post(quoteController.postQuote);
router.route("/get-all-quotes").get(quoteController.getAllQuotes);
router.route("/set-book").post(quoteController.updateBookedStatus);

module.exports = router;
