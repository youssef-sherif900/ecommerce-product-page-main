import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    confirm:(state,action) =>{
      state.value = action.payload
    }
  },
});

export const { confirm } = counterSlice.actions;

export default counterSlice.reducer;
