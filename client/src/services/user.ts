import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants";
import { decodeToken } from "@/lib/utils";
import { UserSignInValidator, UserSignUpValidator } from "@/lib/validations/user";
import axios from "axios";
import { z } from "zod";

export const createUser = async ({
  fname,
  lname,
  email,
  phone,
  password,
}: z.infer<typeof UserSignUpValidator>) => {
  try {
    const response = await axios.post(
      import.meta.env.VITE_API_URL + "/api/member/register",
      {
        first_name: fname,
        last_name: lname,
        email,
        phone,
        password,
      }
    );

    if (response.status !== 201) {
      throw new Error(`Failed to create user: ${response.statusText}`);
    }

    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};

export const login = async ({
  email,
  password,
}: z.infer<typeof UserSignInValidator>) => {
  try {
    const response = await axios.post(
      import.meta.env.VITE_API_URL + "/api/token",
      { email, password }
    );

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
