import CreateTodo from "../createTodo/createTodo";
import TodoItem from "../todoItem/todoItem";

function TodoList(props) {
  return (
    <section className="main">
      <ul className="todo-list">
        <TodoItem />
      </ul>
    </section>
  );
}

export default TodoList;
