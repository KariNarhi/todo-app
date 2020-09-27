const express = require("express");
const router = express.Router();

// Bring in Todo model
const Todo = require("../../todoDB_model");

// GET api/todos => Get all todos
router.get("/", (req, res) => {
  Todo.find().then((todos) => res.json(todos));
});

router.get("/:id", (req, res) => {
  Todo.findById(req.params.id, (err, todo) => res.json(todo));
});

// POST api/todos => Add a todo
router.post("/", (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
    body: req.body.body,
  });

  newTodo.save().then((newtodo) => res.json(newtodo));
});

// PUT api/todos => Update a todo
router.put("/", (req, res) => {
  //console.log(req.body);
  Todo.findById(req.body._id, (err, todo) => {
    if (err) console.log(err);
    todo.title = req.body.title;
    todo.body = req.body.body;
    todo.completed = req.body.completed;
    todo.save().then((updatedTodo) => res.json(updatedTodo));
  });
});

// DELETE api/todos/:id => Delete a todo
router.delete("/:id", (req, res) => {
  Todo.findById(req.params.id)
    .then((todo) => todo.remove())
    .then((deletedTodo) => res.json(deletedTodo));
});

module.exports = router;
