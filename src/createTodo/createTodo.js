import { useEffect, useReducer, useState, createContext } from "react";
import { Route } from "react-router-dom";
import TodoList from "../todoList/todoList";
import todosList from "../todo.json";
import reducer from "../store/store.js";

import {
  useStore,
  UPDATE_INPUT,
  ADD_TODO,
  CLEAR_COMPLETE,
} from "../store/store";

export const TodosContext = createContext(null);

function CreateTodo() {
  const [state, dispatch] = useReducer(reducer, {
    todos: todosList,
    newInput: "",
  });

  function handleChange(event) {
    dispatch({ type: UPDATE_INPUT, payload: event.target.value });
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      dispatch({ type: ADD_TODO, payload: state.newInput });
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <>
      <TodosContext.Provider value={dispatch}>
        <Route exact path="/main">
          <section className="todoapp">
            <header className="header">
              <h1>todos</h1>

              <input
                type="text"
                value={state.newInput}
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
                onChange={(event) => handleChange(event)}
              />
              <button value="submit">Submit</button>
            </header>
            <TodoList todos={state.todos} />
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
        {/* <Route exact path="/active">
          <section className="todoapp">
            <header className="header">
              <h1>todos</h1>
              <input
                type="text"
                value={state.newInput}
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
                onChange={(event) => handleChange(event)}
              />
            </header>
            <TodoList
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
            />
          </section>
        </Route> */}
        {/* <Route exact path="/completed">
          <section className="todoapp">
            <header className="header">
              <h1>todos</h1>
              <input
                type="text"
                value={state.newInput}
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
                onChange={(event) => handleChange(event)}
              />
            </header>
            <TodoList
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
            />
          </section>
        </Route> */}
      </TodosContext.Provider>
    </>
  );
}

export default CreateTodo;
