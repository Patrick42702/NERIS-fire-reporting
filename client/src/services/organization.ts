import { useAppSelector } from "@/hooks";
import { RegisterOrgInputs } from "@/types";
import api from "@/utils/api";

interface CreateOrganizationProps extends RegisterOrgInputs {
  userId: number;
}

export const createOrganization = async ({
  name,
  phone,
  userId,
}: CreateOrganizationProps) => {
  const response = await api.post("/api/organizations", {
    name,
    phone,
    userId,
  });

  return response;
};
