const Listing = require("./models/listings.js");
const Review = require("./models/reviews.js");
const customError = require("./utils/CustomError.js");
const { listingSchema, reviewSchema } = require("./joiSchema.js");

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "you must be logged in!!!");
    return res.redirect("/login");
  }
  next();
};

module.exports.redirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

module.exports.isOwner = async (req, res, next) => {
  const { id } = req.params;
  const listingsId = await Listing.findById(id);
  if (
    res.locals.currentUser &&
    !listingsId.owner.equals(res.locals.currentUser._id)
  ) {
    req.flash("error", "you don't have permission to Edit!");
    return res.redirect(`/listings/${id}`);
  }
  next();
};

module.exports.isReviewAuthor = async (req, res, next) => {
  const { id, reviewId } = req.params;
  const ReviewId = await Review.findById(reviewId);
  if (
    res.locals.currentUser &&
    !ReviewId.author.equals(res.locals.currentUser._id)
  ) {
    req.flash("error", "you don't have permission to Delete!");
    return res.redirect(`/listings/${id}`);
  }
  next();
};

module.exports.validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);
  console.log(error);
  if (error) {
    throw new customError(400, error);
  } else {
    next();
  }
};

module.exports.validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  console.log(error);
  if (error) {
    throw new customError(400, error);
  } else {
    next();
  }
};
