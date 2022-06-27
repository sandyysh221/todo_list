import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { name: "Buy shopping", isDone: false },
    { name: "Clean bathroom", isDone: true },
    { name: "Car's MOT", isDone: false },
  ]);

  const [newTask, setNewTask] = useState("");

  const taskNodes = tasks.map((task, index) => {
    return (
      <li key={index} className={task.isDone ? "done" : "not-done"}>
        <span>{task.name}</span>
      </li>
    );
  });

  const handleTaskInput = (event) => {
    setNewTask(event.target.value);
  };

  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push({ name: newTask, isDone: false });
    setTasks(copyTasks);
    setNewTask("");
  };

  const addNewTask = (index) => {
    const copyTasks = [...tasks];
    copyTasks[index].isDone = true;
    setTasks(copyTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form onSubmit={saveNewTask}>
        <label htmlFor="new-task">Add a new task</label>
        <input
          id="new-task"
          type="text"
          value={newTask}
          onChange={handleTaskInput}
        />
        <input type="submit" value="Save new task" />
      </form>

      <ul>{taskNodes}</ul>
    </div>
  );
}

export default App;
