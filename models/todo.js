const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: false,
    default: Date.now,
  },
  completed: { type: Boolean },
});

module.exports = mongoose.model("Todo", todoSchema);
