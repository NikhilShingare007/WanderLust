const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const customError = require("./utils/CustomError.js");
const session = require("express-session");
const flash = require("connect-flash");

const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Wanderlust");
}

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);

// const sessionOptions = {
//   secret: "MyNameIsNikhil",
//   resave: false,
//   saveUninitialized: true,
// };

// app.use(session(sessionOptions));
// app.use(flash());

// app.use((req, res, next) => {
//   res.locals.errorMsg = req.flash("Error");
//   res.locals.successMsg = req.flash("Success");
//   next();
// });

// app.get("/register", (req, res) => {
//   let { name = "Friend" } = req.query;
//   req.session.name = name;

//   if (name === "Friend") {
//     req.flash("Error", "User Not Registered Yet");
//   } else {
//     req.flash("Success", "User Registered Successfully");
//   }
//   console.log(req.flash);
//   res.redirect("/hello");
// });

// app.get("/hello", (req, res) => {
//   res.render("Experiments/register.ejs", { name: req.session.name });
// });

// app.get("/session", (req, res) => {
//   if (req.session.count) {
//     req.session.count++;
//   } else {
//     req.session.count = 1;
//   }
//   res.send(`you sent a request ${req.session.count} times`);
// });

app.get("/", (req, res) => {
  res.send("I am root");
});

app.use((err, req, res, next) => {
  let { status = 500, message = "Something went wrong" } = err;
  res.status(status).render("listings/error.ejs", { message });
});

app.listen(8080, () => {
  console.log("Server is listening to port 8080");
});
