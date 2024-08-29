const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(express.json());

let todos = JSON.parse(fs.readFileSync("./todos.json", "utf-8"));

// List todos
app.get("/", (req, res) => {
  res.send(todos);
});

// Add todo
app.post("/", (req, res) => {
  const { task } = req.body;
  const newTask = {
    id: Math.floor(Math.random() * 1000),
    task: task,
    isCompleted: false,
  };
  todos.push(newTask);
  res.send(newTask);
  fs.writeFileSync("./todos.json", JSON.stringify(todos));
});

// Update todo
app.put("/", (req, res) => {
  const { id, task, isCompleted } = req.body;
  const idx = todos.findIndex((todo) => todo.id == id);
  if (task) todos[idx].task = task;
  if (isCompleted) todos[idx].isCompleted = isCompleted;
  res.send(todos);
  fs.writeFileSync("./todos.json", JSON.stringify(todos));
});

// Delete todo
app.delete("/", (req, res) => {
  const { id } = req.body;
  const idx = todos.findIndex((todo) => todo.id == id);
  todos.splice(idx, 1);
  res.send(todos);
  fs.writeFileSync("./todos.json", JSON.stringify(todos));
})

app.listen(port, () => console.log(`Server running on PORT:${port}`));
