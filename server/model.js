const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  service: String,
  description: String,
  thumbnail: String,
  price: Number,
});

module.exports = mongoose.model("formSchema", schema);
