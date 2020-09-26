const express = require("express");
const router = express.Router();

// Bring in Todo model
const Todo = require("../../todoDB_model");

// GET api/todos => Get all todos
router.get("/", (req, res) => {
  Todo.find().then((todos) => res.json(todos));
});

// POST api/todos => Add a todo
router.post("/", (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
    body: req.body.body,
  });

  newTodo.save();
});

module.exports = router;
