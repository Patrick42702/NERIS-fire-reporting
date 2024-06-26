import { userActions } from "../reducers/userReducer";

// Action to log out the user
export const logout = () => (dispatch: any) => {
  dispatch(userActions.resetUserInfo());
  localStorage.removeItem("account");
};
