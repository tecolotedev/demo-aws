import Tasks from "./compoents/Tasks";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="todo-container">
        <div className="todo-card">
          <h2>My todo list</h2>
          <Tasks />
        </div>
      </div>
    </div>
  );
}

export default App;
