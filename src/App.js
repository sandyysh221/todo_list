import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { name: "Buy shopping", priority: "high" },
    { name: "Clean bathroom", priority: "low" },
    { name: "Car's MOT", priority: "high" },
  ]);

  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("");

  // MVP:
  // const taskNodes = tasks.map((task, index) => {
  //   return (
  //     <div>
  //       <li key={index} className={task.isDone ? "done" : "not-done"}>
  //         <span>{task.name}</span>
  //         {task.isDone ? (
  //           <span className="done">Done</span>
  //         ) : (
  //           <button onClick={() => completeTask(index)}>Not Done</button>
  //         )}
  //       </li>
  //     </div>
  //   );
  // });

  // Extension:
  const taskNodes = tasks.map((task, index) => (
    <li key={index} className={task.priority}>
      {task.name}
    </li>
  ));

  const handleTaskInput = (event) => {
    setNewTask(event.target.value);
  };

  const handlePriorityInput = (event) => {
    setPriority(event.target.value);
  };

  // MVP:
  // const saveNewTask = (event) => {
  //   event.preventDefault();
  //   const copyTasks = [...tasks];
  //   copyTasks.push({ name: newTask, isDone: false });
  //   setTasks(copyTasks);
  //   setNewTask("");
  // };

  // Extension:
  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push({ name: newTask, priority: priority });
    setTasks(copyTasks);
    setNewTask("");
  };

  // MVP:
  // const completeTask = (index) => {
  //   const copyTasks = [...tasks];
  //   copyTasks[index].isDone = true;
  //   setTasks(copyTasks);
  // };

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
        <label htmlFor="high">High</label>
        <input
          id="high"
          type="radio"
          name="prioritySelect"
          value="high"
          onChange={handlePriorityInput}
        />
        <label htmlFor="low">Low</label>
        <input
          id="low"
          type="radio"
          name="prioritySelect"
          value="low"
          onChange={handlePriorityInput}
        />

        <input type="submit" value="Save new task" />
      </form>

      <ul>{taskNodes}</ul>
    </div>
  );
}

export default App;
