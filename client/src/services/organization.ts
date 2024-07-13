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
  const response = await api.post("/api/org/register", {
    dept_name: name,
    dept_phone: phone,
    admin_id: userId,
  });

  return response;
};
