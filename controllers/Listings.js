const Listing = require("../models/listings.js");
const { geocode } = require("../map.js");

module.exports.search = async (req, res) => {
  const { search } = req.query;

  let filter = {};

  if (search) {
    const regex = new RegExp(search, "i"); // case-insensitive search
    filter = {
      $or: [
        { title: regex },
        { location: regex },
        { description: regex },
        { country: regex },
      ],
    };
  }

  const allListings = await Listing.find(filter);

  res.render("listings/index", {
    allListings,
    search,
    selectedField: null,
    selectedCategory: "all",
    hasResults: allListings.length > 0,
  });
};

module.exports.index = async (req, res) => {
  const { category } = req.query;

  let filter = {};
  const selectedCategory = category || "all";

  if (selectedCategory !== "all") {
    filter.categories = selectedCategory;
  }

  const allListings = await Listing.find(filter);

  res.render("listings/index", {
    allListings,
    selectedCategory,
    hasResults: allListings.length > 0, // ✅ add this
  });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  const { id } = req.params;
  const listings = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listings) {
    req.flash("error", "Listing not found.");
    return res.redirect("/listings");
  }

  let coords = await geocode(listings.location);
  if (!coords || !coords.coordinates) {
    coords = await geocode(listings.country);
  }
  console.log(coords);
  res.render("listings/show.ejs", { listings, coords });
};

module.exports.createListing = async (req, res) => {
  const url = req.file.path;
  const filename = req.file.filename;
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  await newListing.save();
  req.flash("success", "New listing created");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing not found.");
    return res.redirect("/listings");
  }

  let originalImageUrl = listing.image.url;
  let changedImageUrl = originalImageUrl.replace(
    "/upload",
    "/upload/h_200,w_250"
  );
  res.render("listings/edit.ejs", { listing, changedImageUrl });
};

module.exports.updateListing = async (req, res) => {
  const { id } = req.params;
  const listings = await Listing.findByIdAndUpdate(
    id,
    { ...req.body.listing },
    { new: true }
  );

  if (typeof req.file !== "undefined") {
    const url = req.file.path;
    const filename = req.file.filename;
    listings.image = { url, filename };
    await listings.save();
  }

  req.flash("success", "listing Updated");
  res.redirect(`/listings/${id}`);
};

module.exports.deleteListings = async (req, res) => {
  const { id } = req.params;
  const DeletedListings = await Listing.findByIdAndDelete(id);
  req.flash("success", "listing Deleted");
  res.redirect("/listings");
};
