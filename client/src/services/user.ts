import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants";
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

    // store access_token and refresh_token in localStorage
    localStorage.clear();
    localStorage.setItem(ACCESS_TOKEN, response.data.access);
    localStorage.setItem(REFRESH_TOKEN, response.data.refresh);

    return response;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};
