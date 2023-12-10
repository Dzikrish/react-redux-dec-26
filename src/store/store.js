import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducer/counterSlice";
import changeColor from "../reducer/changeColor";

export const store = configureStore({
  reducer: {
    //reducer disini
    counter: counterReducer,
    change: changeColor,
  },
});
