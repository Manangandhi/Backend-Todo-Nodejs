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
    completed: false,
  });
  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

// Update Todo
router.patch("/update", async (req, res) => {
  let { name, description, _id, completed } = req.body;
  try {
    let todo = await Todo.findOneAndUpdate(
      { _id },
      { name, description, completed },
      { new: true }
    );
    if (todo == null) {
      return res.status(404).json({ message: "Cannot Find TodoList" });
    }
    res.json(todo);
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
