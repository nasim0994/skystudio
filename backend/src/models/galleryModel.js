const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema({
  images: {
    type: Array,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ServiceCategory",
    required: true,
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
    required: true,
  },
});

const Gallery = mongoose.model("Gallery", GallerySchema);

module.exports = Gallery;
