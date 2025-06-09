const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listings.js");
const Review = require("../models/reviews.js");

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

const initDB = async () => {
  await Listing.deleteMany({});
  await Review.deleteMany({});
  const listingWithOwner = initData.data.map((obj) => ({
    ...obj,
    owner: "6842e332b614e204adcb697c",
  }));
  await Listing.insertMany(listingWithOwner);

  console.log("Data was initialized");
};

initDB();
