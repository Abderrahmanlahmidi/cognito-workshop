import { z } from "zod";

export const verifyEmailInputClassName =
  "mt-2 w-full rounded-xl border border-slate-700/70 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20";

export const verifyEmailInputErrorClassName =
  "border-rose-400 focus:border-rose-400 focus:ring-rose-400/20";

export const verifyEmailSchema = z.object({
  email: z.string().trim().email("Enter a valid email address"),
  code: z
    .string()
    .trim()
    .regex(/^\d{6}$/, "Verification code must be exactly 6 digits"),
});

export type VerifyEmailFormValues = z.infer<typeof verifyEmailSchema>;

export const verifyEmailDefaultValues: VerifyEmailFormValues = {
  email: "",
  code: "",
};
