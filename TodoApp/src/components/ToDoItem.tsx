import "../ToDoApp.css";

interface TodoItemProps {
  item: {
    text: string;
    completed: boolean;
  };
  onComplete: () => void;
  onDelete: () => void;
}

export default function TodoItem({
  item,
  onComplete,
  onDelete,
}: TodoItemProps) {
  return (
    <li className="todo-item">
      <span
        className="todo-text"
        style={{ textDecoration: item.completed ? "line-through" : "none" }}
      >
        {item.text}
      </span>
      <div className="todo-buttons">
        <button className="complete-button" onClick={onComplete}>
          Done!
        </button>
        <button className="delete-button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  );
}
