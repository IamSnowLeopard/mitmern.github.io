import { useState } from "react";
import "../ToDoApp.css";

interface TodoInputProps {
  onAdd: (input: string) => void;
}

export default function TodoInput({ onAdd }: TodoInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim() !== "") {
      onAdd(input.trim());
      setInput("");
    }
  };

  //react to pressing enter
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="my-input"
      ></input>
    </div>
  );
}
