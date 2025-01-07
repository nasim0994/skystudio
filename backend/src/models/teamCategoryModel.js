const mongoose = require("mongoose");

const teamCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  order: {
    type: Number,
    require: true,
  },
});

const TeamCategory = mongoose.model("TeamCategory", teamCategorySchema);

module.exports = TeamCategory;
