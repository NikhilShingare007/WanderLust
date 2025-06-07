const Review = require("../models/reviews.js");
const Listing = require("../models/listings.js");

module.exports.createReview = async (req, res) => {
  const listings = await Listing.findById(req.params.id);
  const newReview = new Review(req.body.review);
  newReview.author = req.user._id;
  listings.reviews.push(newReview);

  await newReview.save();
  await listings.save();

  console.log("Review Saved Successfully.");
  req.flash("success", "New Review Created");
  res.redirect(`/listings/${listings._id}`);
};

module.exports.deleteReview = async (req, res) => {
  const { id, reviewId } = req.params;
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  req.flash("success", "Review Deleted");
  res.redirect(`/listings/${id}`);
};
