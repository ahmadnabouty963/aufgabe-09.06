import "./App.css";
import React from "react";
import { useToggle } from "./hooks/useToggle";
import TaskItem from "./components/TaskItem";

const initialTasks = [
  {
    id: 1,
    title: "React Learning",
    description: "es ist kompliziert, wir kriegen es aber irgendwie hin",
    category: "still learning",
    priority: "Hoch",
  },
  {
    id: 2,
    title: "useToggle und Hooks im React",
    description: "es ist kompliziert, aber wir schaffen es",
    category: "still learning",
    priority: "Hoch",
  },
  {
    id: 3,
    title: "HTML",
    description: "es ist einfach und schnell",
    category: "fast zu 80%",
    priority: "niedrig",
  },
  {
    id: 4,
    title: "CSS",
    description: "macht Spaß und zeigt Ergebnisse direkt",
    category: "fast zu 80%",
    priority: "mittel",
  },
];

function App() {
  const { value: showOnlyHighPriority, toggle: togglePriorityFilter } =
    useToggle(false);

  const { value: showInfoBox, toggle: toggleInfoBox } = useToggle(true);

  const filteredTasks = showOnlyHighPriority
    ? initialTasks.filter((task) => task.priority === "Hoch")
    : initialTasks;

  return (
    <div>
      <h1>Task App</h1>

      <button onClick={togglePriorityFilter}>
        {showOnlyHighPriority ? "Alle zeigen" : "Nur Hoch"}
      </button>

      <button onClick={toggleInfoBox}>Info Box</button>

      {showInfoBox && <p>Hier ist eine kleine Info Box 👋</p>}

      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default App;
