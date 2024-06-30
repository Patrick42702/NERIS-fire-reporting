import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";

// Fetch user info from local storage and decode token
const userInfoFromStorage = localStorage.getItem("user");
const parsedUserInfo = userInfoFromStorage ? JSON.parse(userInfoFromStorage) : null;

// Define the initial state for the store
const initialState = {
  user: {
    userInfo: parsedUserInfo,
  },
};

// Create the Redux store with the user reducer and the initial state
const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState: initialState,
});

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;

export default store;
