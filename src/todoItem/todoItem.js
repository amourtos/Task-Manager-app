import { useContext } from "react";
import { TodosContext } from "../createTodo/createTodo";
import todoList from "../todo.json";

function TodoItem(props) {
  const dispatch = useContext(TodosContext);
  return (
    <ul className={props.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={props.completed}
          onChange={(event) =>
            dispatch({ type: "TOGGLE_COMPLETE", payload: props.id })
          }
        />
        <label>{props.title}</label>
        <button
          className="destroy"
          onClick={(event) =>
            dispatch({ type: "DELETE_TODO", payload: props.id })
          }
        />
      </div>
    </ul>
  );
}

export default TodoItem;
