import create from "zustand";
import { devtools, redux } from "zustand/middleware";
import todoList from "../todo.json";

const initialState = { user: JSON.parse(localStorage.getItem("user")) || { token: "" }, todos: [] };

export const LOGIN = "LOGIN";
export const UPDATE_INPUT = "UPDATE_INPUT";
export const ADD_TODO = "ADD_TODO";

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };

    // case UPDATE_INPUT:
    //   return {
    //     ...state,
    //     newInput: action.payload,
    //   };
    // case ADD_TODO:
    //   return {
    //     ...state,
    //     todos: action.payload,
    //   };

    default:
      return state;
  }
};

export const useStore = create(devtools(redux(reducer, initialState)), { name: "storage" });
