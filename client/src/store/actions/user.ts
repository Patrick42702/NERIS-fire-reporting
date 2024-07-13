import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants";
import { userActions } from "../reducers/userReducer";
import { AppDispatch } from "..";

// Action to log out the user
export const logout = () => (dispatch: AppDispatch) => {
  dispatch(userActions.resetUserInfo());
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
  localStorage.removeItem("user");
};
