import { useToggle } from "../hooks/useToggle";

export default function TaskItem({ task }) {
  const { value: isCompleted, toggle: toggleCompleted } = useToggle(false);
  const { value: isExpanded, toggle: toggleExpanded } = useToggle(false);

  const priorityColors = {
    Hoch: "badge-error",
    Mittel: "badge-warning",
    Niedrig: "badge-info",
  };

  return (
    <div className="border p-3 mb-2">
      <h3>{task.title}</h3>

      <span className={`badge ${priorityColors[task.priority]}`}>
        {task.priority}
      </span>

      <button onClick={toggleExpanded}>
        {isExpanded ? "Einklappen" : "Mehr anzeigen"}
      </button>

      {isExpanded && <p>{task.description}</p>}

      <button onClick={toggleCompleted}>
        {isCompleted ? "Erledigt ✔" : "Nicht erledigt"}
      </button>
    </div>
  );
}
