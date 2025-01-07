const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TeamCategory",
    required: true,
  },
});

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;
