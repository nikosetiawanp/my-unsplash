const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
  label: {
    required: true,
    type: String,
  },
  url: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Data", dataSchema);
