import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { name: "Buy shopping", isDone: false, priority: "high" },
    { name: "Clean bathroom", isDone: true, priority: "low" },
    { name: "Car's MOT", isDone: false, priority: "high" },
  ]);

  const [newTask, setNewTask] = useState("");
  const [newPriority, setNewPriority] = useState("");

  const taskNodes = tasks.map((task, index) => {
    return (
      <div>
        <li key={index} className={task.isDone ? "done" : "not-done"}>
          <span>{task.name}</span>
          {task.isDone ? (
            <span className="done">Done</span>
          ) : (
            <button onClick={() => completeTask(index)}>Not Done</button>
          )}
          {task.priority ? (
            <span className="low-priority">Low Priority</span>
          ) : (
            <button onClick={() => priorityTask(index)}>
              Change to High Priority
            </button>
          )}
        </li>
        <li
          key={index}
          className={
            task.priority === "high" ? "high-priority" : "low-priority"
          }
        >
          <span>{task.priority}</span>
        </li>
      </div>
    );
  });

  const handleTaskInput = (event) => {
    setNewTask(event.target.value);
  };

  const handlePriorityInput = (event) => {
    setNewPriority(event.target.value);
  };

  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push({ name: newTask, isDone: false });
    setTasks(copyTasks);
    setNewTask("");
  };

  const saveNewPriority = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push({ name: newTask, isDone: false, priority: newPriority });
    setTasks(copyTasks);
    setNewTask("");
  };

  const completeTask = (index) => {
    const copyTasks = [...tasks];
    copyTasks[index].isDone = true;
    setTasks(copyTasks);
  };

  const priorityTask = (index) => {
    const copyTasks = [...tasks];
    copyTasks[index].priority = "high";
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
      </form>
      <form onSubmit={saveNewPriority}>
        <label htmlFor="high-priority">
          <input
            id="priority"
            type="radio"
            name="priority"
            value="high"
            onChange={handlePriorityInput}
          />
          High Priority
        </label>
        <label htmlFor="low-priority">
          <input
            id="priority"
            type="radio"
            name="priority"
            value="low"
            onChange={handlePriorityInput}
          />
          Low Priority
        </label>

        <input type="submit" value="Save new task" />
      </form>

      <ul>{taskNodes}</ul>
    </div>
  );
}

export default App;
