import "./Task.css";

const Task = ({ task, setTasks, tasks, idx }) => {
  const { name, checked } = task;

  const onSetCheked = () => {
    const newTasks = [...tasks];
    newTasks[idx].checked = !newTasks[idx].checked;
    setTasks(newTasks);
  };

  const onDeleteTask = () => {
    const newTasks = [...tasks].filter((_, _idx) => _idx !== idx);
    setTasks(newTasks);
  };

  return (
    <div className="task">
      <input
        type="checkbox"
        className="checkbox"
        checked={checked}
        onChange={onSetCheked}
      />
      <span className={`task-name ${checked ? "checked" : ""}`}>{name}</span>
      <span className="delete-task" onClick={onDeleteTask}>
        x
      </span>
    </div>
  );
};

export default Task;
