import React, { useState } from "react";
import Filter from "./Filter";
import { FaPlusSquare } from "react-icons/fa";

function TodoForm({ addTodo, setFilter }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
     <button className="todo-button" type="submit">
  <FaPlusSquare />
</button>
      <Filter setFilter={setFilter} />
    </form>
  );
}

export default TodoForm;
