const express = require("express");

const app = express();
app.use(express.json());

const port = 3000;

let todos = [];

// get all todos
app.get("/", (req, res) => {
  res.send(todos);
});

// add todo
app.post("/", (req, res) => {
  const { task } = req.body;
  const newTask = {
    id: Math.floor(Math.random() * 1000),
    task: task,
    isCompleted: false,
  };
  todos.push(newTask);
  res.send(newTask);
});

// update todo
app.put("/", (req, res) => {
  const { id, task, isCompleted } = req.body;
  const newTask = todos.findIndex((todo) => todo.id == id);
  todos[newTask].task = task;
  todos[newTask].isCompleted = isCompleted;
  res.send(todos[newTask]);
});

// delete todo
app.delete("/", (req, res) => {
  const { id } = req.body;
  const idx = todos.findIndex((todo) => todo.id == id);
  todos.splice(idx, 1);
  res.send(todos);
});

app.listen(port, () => console.log(`Server started at ${port}...`));
