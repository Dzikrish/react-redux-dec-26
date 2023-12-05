import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  //Nama state
  name: "counter",
  //inisial state
  initialState: {
    value: 100,
  },
  //nama action reducer
  reducers: {
    increment: (state) => {
      //actionnya ngapain
      state.value += 1;
    },
    decrement: (state) => {
      //actionnya ngapain
      state.value -= 1;
    },
  },
});

//export actionnya ke reducer
export const { increment, decrement } = counterSlice.actions;
//export reducer biar bisa dipake di func lain
export default counterSlice.reducer;
