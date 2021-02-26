const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemSchema = new Schema({
  name: String,
  price: Number,
  imageUrl: String,
  featured: {type: Boolean, default: false},
  collectionId: String
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;