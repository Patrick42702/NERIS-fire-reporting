import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants";
import { decodeToken } from "@/lib/utils";
import { LoginUserInputs, RegisterUserInputs } from "@/types";
import axios from "axios";

export const createUser = async ({
  fname,
  lname,
  email,
  phone,
  password,
}: Partial<RegisterUserInputs>) => {
  try {
    const response = await fetch("/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,
        lname,
        email,
        phone,
        password,
      }),
    });
    if (!response.ok) {
      throw new Error(`Failed to create user: ${response.statusText}`);
    }
    return response.json();
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};

export const login = async ({ email, password }: LoginUserInputs) => {
  try {
    const response = await axios.post("/api/token", { email, password });

    // Decode the access token
    const decodedToken = decodeToken(response.data.access);

    // Store access_token, refresh_token, and user info in localStorage
    localStorage.clear();
    localStorage.setItem(ACCESS_TOKEN, response.data.access);
    localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
    localStorage.setItem("user", JSON.stringify(decodedToken));

    return {
      access: response.data.access,
      refresh: response.data.refresh,
      ...decodedToken,
    };
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};

export const logout = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
  localStorage.removeItem("user");
};
