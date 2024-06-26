import { RegisterUserInputs } from "@/types";

export const createUser = async ({
  fname,
  lname,
  email,
  phone,
  password,
}: Partial<RegisterUserInputs>) => {
  const response = await fetch("/api/users", {
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
};