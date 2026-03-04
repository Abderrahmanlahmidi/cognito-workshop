import { z } from "zod";

export const registerInputClassName =
  "mt-2 w-full rounded-xl border border-slate-700/70 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20";

export const registerInputErrorClassName =
  "border-rose-400 focus:border-rose-400 focus:ring-rose-400/20";

export const registerSchema = z.object({
  email: z.string().trim().email("Enter a valid email address"),
  username: z
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username must be at most 30 characters")
    .regex(
      /^[a-zA-Z0-9._-]+$/,
      "Username can only use letters, numbers, . _ -",
    ),
  given_name: z
    .string()
    .trim()
    .min(2, "Given name must be at least 2 characters")
    .max(50, "Given name is too long")
    .regex(
      /^[A-Za-z' -]+$/,
      "Given name can only use letters, spaces, apostrophes, and hyphens",
    ),
  family_name: z
    .string()
    .trim()
    .min(2, "Family name must be at least 2 characters")
    .max(50, "Family name is too long")
    .regex(
      /^[A-Za-z' -]+$/,
      "Family name can only use letters, spaces, apostrophes, and hyphens",
    ),
  birthdate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Birthdate must be in YYYY-MM-DD format")
    .refine((value) => {
      const date = new Date(`${value}T00:00:00`);
      if (Number.isNaN(date.getTime())) {
        return false;
      }

      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date < today;
    }, "Birthdate must be a valid past date"),
  address: z
    .string()
    .trim()
    .min(5, "Address must be at least 5 characters")
    .max(120, "Address is too long"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must include at least one uppercase letter")
    .regex(/[a-z]/, "Password must include at least one lowercase letter")
    .regex(/[0-9]/, "Password must include at least one number")
    .regex(/[^A-Za-z0-9]/, "Password must include at least one symbol"),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;

export const registerDefaultValues: RegisterFormValues = {
  email: "",
  username: "",
  given_name: "",
  family_name: "",
  birthdate: "",
  address: "",
  password: "",
};
