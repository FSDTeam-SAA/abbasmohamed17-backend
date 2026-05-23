import { z } from "zod";
import { USER_DIVISION, USER_ROLE } from "./user.constant";

const userValidationSchema = z.object({
  body: z.object({
    firstName: z.string({
      required_error: "First name is required",
    }),
    lastName: z.string({
      required_error: "Last name is required",
    }),
    email: z.string({
      required_error: "Email is required",
    }),
    password: z.string({
      required_error: "Password is required",
    }),
    role: z.nativeEnum(USER_ROLE).optional(),
    division: z.nativeEnum(USER_DIVISION).optional(),
  }),
});

export const userValidation = {
  userValidationSchema,
};
