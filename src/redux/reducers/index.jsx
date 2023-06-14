import { combineReducers } from "redux";
import ThemeReducer from "./Theme";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = configureStore({
  reducer: {
    theme: ThemeReducer,
  },
});

export default rootReducer;
