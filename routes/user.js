const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const User = require("../models/user.js");
const passport = require("passport");
const { redirectUrl } = require("../middleware.js");
const router = express.Router();
const userController = require("../controllers/Users.js");

router
  .route("/signup")
  .get(wrapAsync(userController.renderSignupForm))
  .post(wrapAsync(userController.signup));

router
  .route("/login")
  .get(userController.renderLoginForm)
  .post(
    redirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    wrapAsync(userController.login)
  );

router.get("/logout", userController.logout);

module.exports = router;
