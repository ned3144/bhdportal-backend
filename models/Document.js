const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DocumentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category_id: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  file_id: {
    type: String,
    required: true
  }
});

module.exports = Document = mongoose.model(
  "documents",
  DocumentSchema
);
