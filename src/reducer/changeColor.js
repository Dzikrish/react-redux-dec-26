import { createSlice } from "@reduxjs/toolkit";

export const changeColor = createSlice({
  //Nama state
  name: "change",
  //inisial state
  initialState: {
    value: true,
  },
  //nama action reducer
  reducers: {
    change: (state) => {
      //actionnya ngapain
      state.value = !state.value;
    },
  },
});

//export actionnya ke reducer
export const { change } = changeColor.actions;
//export reducer biar bisa dipake di func lain
export default changeColor.reducer;
