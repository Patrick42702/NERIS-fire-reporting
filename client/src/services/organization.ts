import { RegisterUserInputs } from "@/types";

export const createOrganization = async ({
    organization,
    organizationPhone,
  }: Partial<RegisterUserInputs>) => {
    const response = await fetch("/api/organizations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        organization,
        organizationPhone,
      }),
    });
    if (!response.ok) {
      throw new Error(`Failed to create organization: ${response.statusText}`);
    }
    return response.json();
  };
  