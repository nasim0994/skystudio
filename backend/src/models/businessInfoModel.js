const mongoose = require("mongoose");

const businessInfoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    startYear: {
      type: Number,
    },
    type: {
      type: String,
    },
    bio: {
      type: String,
    },
  },
  { timestamps: false }
);

const BusinessInfo = mongoose.model("BusinessInfo", businessInfoSchema);

module.exports = BusinessInfo;
