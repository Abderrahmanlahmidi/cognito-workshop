import { z } from "zod";

export const loginInputClassName =
  "mt-2 w-full rounded-xl border border-slate-700/70 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20";

export const loginInputErrorClassName =
  "border-rose-400 focus:border-rose-400 focus:ring-rose-400/20";

export const loginSchema = z.object({
  identifier: z
    .string()
    .trim()
    .min(1, "Email or username is required")
    .refine((value) => {
      if (value.includes("@")) {
        return z.string().email().safeParse(value).success;
      }

      return /^[a-zA-Z0-9._-]{3,30}$/.test(value);
    }, "Enter a valid email or username"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const loginDefaultValues: LoginFormValues = {
  identifier: "",
  password: "",
};
