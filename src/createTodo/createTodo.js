import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import TodoList from "../todoList/todoList";
import { useStore, UPDATE_INPUT, ADD_TODO } from "../store/store";

function CreateTodo() {
  const dispatch = useStore((state) => state.dispatch);

  const [newInput, setNewInput] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(event) {
    let inputTitle = event.target.title;
    let inputValue = event.target.value;
    setNewInput((state) => ({ ...state, [inputTitle]: inputValue }));
    setNewInput(event.target.value);
    dispatch({ type: UPDATE_INPUT, payload: event.target.value });
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setTodos(newInput);
      dispatch({ type: ADD_TODO, payload: todos });
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/main">
          <section className="todoapp">
            <header className="header">
              <h1>todos</h1>
              <form onSubmit={handleKeyDown}>
                <input
                  type="text"
                  value={newInput}
                  className="new-todo"
                  placeholder="What needs to be done?"
                  autoFocus
                  onChange={(event) => handleChange(event)}
                />
                <button value="submit">Submit</button>
              </form>
            </header>
            <TodoList todos={todos} />
            {/* <Footer
                clearComplete={clearComplete}
                itemsLeft={
                  state.todos.filter((todo) => {
                    if (todo.completed === true) {
                      return false;
                    } else {
                      return true;
                    }
                  }).length
                }
              /> */}
          </section>
        </Route>
        <Route exact path="/active">
          <section className="todoapp">
            <header className="header">
              <h1>todos</h1>
              <input
                type="text"
                value={newInput}
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
                onChange={(event) => handleChange(event)}
              />
            </header>
            {/* <TodoList
              todos={todos.filter((todo) => {
                if (todo.completed === true) {
                  return false;
                } else {
                  return true;
                }
              })}
            /> */}
            {/* <Footer
                clearComplete={clearComplete}
                itemsLeft={
                  state.todos.filter((todo) => {
                    if (todo.completed === true) {
                      return false;
                    } else {
                      return true;
                    }
                  }).length
                }
              /> */}
          </section>
        </Route>
        <Route exact path="/completed">
          <section className="todoapp">
            <header className="header">
              <h1>todos</h1>
              <input
                type="text"
                value={newInput}
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
                onChange={(event) => handleChange(event)}
              />
            </header>
            {/* <TodoList
              todos={todos.filter((todo) => {
                if (todo.completed === true) {
                  return true;
                } else {
                  return false;
                }
              })}
            /> */}
            {/* <Footer
                clearComplete={clearComplete}
                itemsLeft={
                  state.todos.filter((todo) => {
                    if (todo.completed === true) {
                      return false;
                    } else {
                      return true;
                    }
                  }).length
                }
              /> */}
          </section>
        </Route>
      </Switch>
    </>
  );
}

export default CreateTodo;
