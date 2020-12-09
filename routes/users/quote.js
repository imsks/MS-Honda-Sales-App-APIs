const router = require("express").Router();
const quoteController = require("../../controllers/user/quote");

// For testing only
router.route("/test").get(quoteController.test);

// For Auth
router.route("/set-quote-for-customer").post(quoteController.postQuote);

module.exports = router;
