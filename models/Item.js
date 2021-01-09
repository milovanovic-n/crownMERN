const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemSchema = new Schema({
  name: String,
  price: Number,
  imageUrl: String,
  collectionId: String
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;