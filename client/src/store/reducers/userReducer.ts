import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the user slice
const userInitialState = {
  userInfo: null,
};

// Create the user slice
const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    // Reducer to set user info
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    // Reducer to reset user info
    resetUserInfo(state) {
      state.userInfo = null;
    },
  },
});

// Export the actions and the reducer
const userActions = userSlice.actions;
const userReducer = userSlice.reducer;

export { userActions, userReducer };
