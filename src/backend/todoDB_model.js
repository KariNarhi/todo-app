const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TodoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
