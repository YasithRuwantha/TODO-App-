const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  done: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model("Todo", todoSchema);