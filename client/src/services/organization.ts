import { RegisterUserInputs } from "@/types";
import api from "@/utils/api";

export const createOrganization = async ({
  organization,
  organizationPhone,
}: Partial<RegisterUserInputs>) => {
  const response = await api.post("/api/organizations", {
    organization,
    organizationPhone,
  });

  return response;
};
