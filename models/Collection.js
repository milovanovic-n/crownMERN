const mongoose = require("mongoose");
const { Schema } = mongoose;

const collectionSchema = new Schema({
  title: String
});

const Collection = mongoose.model("Collection", collectionSchema);

module.exports = Collection;