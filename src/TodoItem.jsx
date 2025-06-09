
import { FaCheck, FaTrash } from "react-icons/fa";

function TodoItem({ todo, index, deleteTodo, toggleComplete }) {
  return (
    <div className={`todo ${todo.completed ? "completed" : ""}`}>
      <li className="todo-item">{todo.text}</li>
      <button className="complete-btn" onClick={() => toggleComplete(index)}>
  <FaCheck />
</button>
<button className="trash-btn" onClick={() => deleteTodo(index)}>
  <FaTrash />
</button>

    </div>
  );
}

export default TodoItem;
