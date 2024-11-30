const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  thumbnail: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  project: {
    type: String,
    required: true,
  },
});

const Review = mongoose.model("clientreview", reviewSchema);

module.exports = Review;
