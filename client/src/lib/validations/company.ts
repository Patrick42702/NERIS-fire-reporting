import { z } from "zod";

export const CompanyApplicationValidator = z.object({
  name: z.string().min(1, { message: "Name required" }),
  phone: z
    .string()
    .regex(
      new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/),
      "Invalid phone number."
    ),
});
