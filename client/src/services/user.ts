import { LoginUserInputs, RegisterUserInputs } from "@/types";

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
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok)
      throw new Error(`Failed to login user: ${response.statusText}`);

    return response.json();
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};
