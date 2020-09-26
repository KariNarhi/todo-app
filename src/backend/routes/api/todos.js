const express = require("express");
const router = express.Router();

// Bring in Todo model
const Todo = require("../../todoDB_model");

// GET api/todos => Get all todos
router.get("/", (req, res) => {
  Todo.find().then((todos) => res.json(todos));
});

module.exports = router;
