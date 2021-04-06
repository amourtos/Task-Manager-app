import create from "zustand";
import { devtools, redux } from "zustand/middleware";

const initialState = { user: { token: "" } };

export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";
export const LOGOUT = "LOGOUT";

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };
    case REGISTER:
      return {};
    case LOGOUT:
      return { user: {} };
    default:
      return state;
  }
};

export const useStore = create(devtools(redux(reducer, initialState)));
