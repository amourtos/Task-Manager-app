import create from "zustand";
import { devtools, redux } from "zustand/middleware";
import todoList from "../todo.json";

const initialState = { user: JSON.parse(localStorage.getItem("user")) || { token: "" }, todos: [] };

export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";
export const LOGOUT = "LOGOUT";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_INPUT = "UPDATE_INPUT";
export const ADD_TODO = "ADD_TODO";
export const CLEAR_COMPLETE = "CLEAR_COMPLETE";
export const GET_TODOLIST = "GET_TODOLIST";
export const GET_TODO = "GET_TODO";

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };
    case REGISTER:
      return {};
    case LOGOUT:
      return { user: {} };
    case GET_TODOLIST:
      return { ...state, todos: action.payload };
    case GET_TODO:
      return { ...state, todo: action.payload };
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
    case TOGGLE_COMPLETE:
      return {
        ...state,
        completed: (state.completed = !state.completed),
        // state.todos.map((todos) => {
        // let newTodo = { ...todo };
        // if (todos.id === action.payload) {
        // todos.completed = !todos.completed;
        // }
        // return todos;
        // }),
      };
    // case DELETE_TODO:
    //   return {
    //     ...state,
    //     todos: state.todos.filter((todo) => {
    //       if (todo.id === action.payload) {
    //         return false;
    //       } else {
    //         return true;
    //       }
    //     }),
    //   };
    // case CLEAR_COMPLETE:
    //   return {
    //     ...state,
    //     todos: state.todos.filter((todo) => {
    //       if (todo.completed === true) {
    //         return false;
    //       } else {
    //         return true;
    //       }
    //     }),
    //   };

    default:
      return state;
  }
};

export const useStore = create(devtools(redux(reducer, initialState)), { name: "storage" });
