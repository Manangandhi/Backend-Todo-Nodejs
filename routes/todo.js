const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

const getTodos = async (req, res, next) => {
  let todo;
  try {
    todo = await Todo.findById(req.params.id);
    if (todo == null) {
      return res.status(404).json({ message: "Cannot Find TodoList" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.todo = todo;
  next();
};

// Get Todo List
router.get("/list", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.send(todos);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// Create Todo
router.post("/create", async (req, res) => {
  const todo = new Todo({
    name: req.body.name,
    description: req.body.description,
    // completed: req.body.completed,
  });
  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

// Update Todo
router.patch("/update/:id", getTodos, async (req, res) => {
  if (req.body.name != null) {
    res.todo.name = req.body.name;
  }
  if (req.body.description != null) {
    res.todo.description = req.body.description;
  }
  if (req.body.completed != null) {
    res.todo.completed = req.body.completed;
  }
  try {
    const updatedTodo = await res.todo.save();
    res.json(updatedTodo);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

// Delete Todo
router.delete("/delete/:id", getTodos, async (req, res) => {
  try {
    await res.todo.remove();
    res.json({ message: "Deleted Todo Successfully." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
