import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: { name: "Wojtek" },
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUserStarr: (state) => {},
    fetchUserSuccess: (state) => {},
    fetchUserFailure: (state) => {},
  },
});

export const { fetchUserStarr, fetchUserSuccess, fetchUserFailure } =
  userSlice.actions;

export default userSlice.reducer;
