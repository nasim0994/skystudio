const mongoose = require("mongoose");

const approachSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Approach = mongoose.model("approach", approachSchema);

module.exports = Approach;
