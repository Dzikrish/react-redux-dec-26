import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducer/counterSlice";

export const store = configureStore({
  reducer: {
    //reducer disini
    counter: counterReducer,
  },
});
