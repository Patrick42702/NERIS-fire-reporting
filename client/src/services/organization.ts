import { useAppSelector } from "@/hooks";
import { CompanyApplicationValidator } from "@/lib/validations/company";
import { RegisterOrgInputs } from "@/types";
import api from "@/utils/api";
import { z } from "zod";

interface CreateOrganizationProps extends z.infer<typeof CompanyApplicationValidator> {
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
