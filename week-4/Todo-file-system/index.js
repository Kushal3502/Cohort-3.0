const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(express.json());

let todos = JSON.parse(fs.readFileSync("./todos.json", "utf-8"));

// List all todos
app.get("/", (req, res) => {
  res.send(todos);
});

// List user todos
app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = todos.find((user) => user.userId === id);

  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ error: "User not found" });
  }
});

// Add todo
app.post("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const { task } = req.body;

  if (!task) {
    return res.status(400).send({ error: "Task is required" });
  }

  const userIndex = todos.findIndex((user) => user.userId === id);

  const newTask = {
    id: Math.floor(Math.random() * 1000),
    task: task,
    isCompleted: false,
  };

  if (userIndex !== -1) {
    todos[userIndex].todos.push(newTask);
  } else {
    todos.push({ userId: id, todos: [newTask] });
  }

  res.send(newTask);
  fs.writeFileSync("./todos.json", JSON.stringify(todos));
});

// Update todo
app.put("/users/:id", (req, res) => {
  const userIndex = Number(req.params.id);
  const { id, task, isCompleted } = req.body;

  const idx = todos.findIndex((user) => user.userId == userIndex);

  if (idx !== -1) {
    const todo = todos[idx].todos.findIndex((todo) => todo.id == id);
    if (todo !== -1) {
      if (task) todos[idx].todos[todo].task = task;
      if (isCompleted) todos[idx].todos[todo].isCompleted = isCompleted;
      res.send(todos[idx].todos[todo]);
    } else {
      res.status(404).send({ error: "Task not found" });
    }
  } else {
    res.status(404).send({ error: "User not found" });
  }

  fs.writeFileSync("./todos.json", JSON.stringify(todos));
});

// Delete todo
app.delete("/users/:id", (req, res) => {
  const userIndex = Number(req.params.id);
  const { id } = req.body;

  const idx = todos.findIndex((user) => user.userId == userIndex);

  if (idx !== -1) {
    const todo = todos[idx].todos.findIndex((todo) => todo.id == id);
    if (todo !== -1) {
      todos[idx].todos.splice(todo, 1);
      res.send(todos[idx]);
    } else {
      res.status(404).send({ error: "Task not found" });
    }
  } else {
    res.status(404).send({ error: "User not found" });
  }

  fs.writeFileSync("./todos.json", JSON.stringify(todos));
});

app.listen(port, () => console.log(`Server running on PORT:${port}`));
