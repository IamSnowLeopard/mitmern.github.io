import TodoItem from "./ToDoItem";
import "../ToDoApp.css";

interface TodoItem {
  text: string;
  completed: boolean;
}

interface TodoListProps {
  items: TodoItem[];
  onComplete: (index: number) => void;
  onDelete: (index: number) => void;
}

export default function TodoList({
  items,
  onComplete,
  onDelete,
}: TodoListProps) {
  return (
    <ul>
      {items.map((item: TodoItem, index: number) => (
        <TodoItem
          key={index}
          item={item}
          onComplete={() => onComplete(index)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </ul>
  );
}
