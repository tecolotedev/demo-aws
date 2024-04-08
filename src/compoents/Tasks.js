import { useState } from "react";
import Task from "./Task";
import "./Tasks.css";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      name: "Make Presentation",
      checked: false,
    },
  ]);
  const [newTask, setNewTask] = useState("");

  const onClick = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { name: newTask, checked: false }]);
      setNewTask("");
    }
  };

  return (
    <div className="tasks">
      <div id="add-task">
        <input
          id="task-input"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <div id="button-container">
          <button onClick={onClick}>Add Task</button>
        </div>
      </div>

      {tasks.map((task, idx) => {
        return (
          <Task
            task={task}
            setTasks={setTasks}
            tasks={tasks}
            idx={idx}
            key={task.name + idx}
          />
        );
      })}
    </div>
  );
};

export default Tasks;
