import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { incrementByAmount } = usersSlice.actions;

export default usersSlice.reducer;
