const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const customError = require("../utils/CustomError.js");
const { listingSchema } = require("../joiSchema.js");
const Listing = require("../models/listings.js");

const validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);
  console.log(error);
  if (error) {
    throw new customError(400, error);
  } else {
    next();
  }
};

//Index Route
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  })
);

//new Route
router.get("/new", (req, res) => {
  res.render("listings/new.ejs");
});

//Show Route
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listings = await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs", { listings });
  })
);

//create Route
router.post(
  "/",
  validateListing,
  wrapAsync(async (req, res) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
  })
);

//Edit Route
router.get(
  "/:id/edit",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
  })
);

//Update Route
router.put(
  "/:id",
  validateListing,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listings = await Listing.findByIdAndUpdate(
      id,
      { ...req.body.listing },
      { new: true }
    );
    res.redirect(`/listings/${id}`);
  })
);

//Delete Route
router.delete(
  "/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const DeletedListings = await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
  })
);

module.exports = router;
