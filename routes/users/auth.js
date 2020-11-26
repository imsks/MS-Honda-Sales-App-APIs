const router = require("express").Router();
const authController = require("../../controllers/user/auth");

// For testing only
router.route("/test").get(authController.test);

// For Auth
router.route("/signin").post(authController.signIn);
router.route("/signup").post(authController.signUp);

module.exports = router;
