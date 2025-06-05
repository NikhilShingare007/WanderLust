const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const User = require("../models/user.js");
const passport = require("passport");
const router = express.Router();

router.get(
  "/signup",
  wrapAsync(async (req, res) => {
    res.render("users/signup.ejs");
  })
);

router.post(
  "/signup",
  wrapAsync(async (req, res) => {
    try {
      let { username, email, password } = req.body;

      let newUser = new User({ email, username });

      let RegisteredUser = await User.register(newUser, password);
      console.log(RegisteredUser);
      req.flash("success", "Welcome to Wanderlust!");
      res.redirect("/listings");
    } catch (err) {
      req.flash("error", err.message);
      res.redirect("/signup");
    }
  })
);

router.get("/login", (req, res) => {
  res.render("users/login.ejs");
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  wrapAsync(async (req, res) => {
    req.flash("success", "Welcome back to Wanderlust!");
    res.redirect("/listings");
  }));

module.exports = router;
