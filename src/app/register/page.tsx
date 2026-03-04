"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerDefaultValues,
  registerInputClassName,
  registerInputErrorClassName,
  RegisterFormValues,
  registerSchema,
} from "@/constants/registerConstants";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
    defaultValues: registerDefaultValues,
  });

  const onSubmit = async (formValues: RegisterFormValues) => {
    console.log(formValues);
    router.push("/verify-email");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.2),_transparent_45%),radial-gradient(circle_at_80%_20%,_rgba(14,165,233,0.2),_transparent_35%)]" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-4xl items-center justify-center px-6 py-16 sm:px-10">
        <div className="w-full rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_0_40px_rgba(2,6,23,0.5)] backdrop-blur md:p-8">
          <div className="mb-8">
            <p className="inline-flex rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-300">
              Register
            </p>
            <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Create your account
            </h1>
            <p className="mt-2 text-sm text-slate-300 sm:text-base">
              Fill in the required Cognito attributes to sign up.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          >
            <label className="block">
              <span className="text-sm font-medium text-slate-200">Email</span>
              <input
                type="email"
                autoComplete="email"
                className={`${registerInputClassName} ${errors.email ? registerInputErrorClassName : ""}`}
                placeholder="you@example.com"
                {...register("email")}
              />
              {errors.email ? (
                <p className="mt-2 text-xs text-rose-300">
                  {errors.email.message}
                </p>
              ) : null}
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-200">
                Username
              </span>
              <input
                type="text"
                autoComplete="username"
                className={`${registerInputClassName} ${errors.username ? registerInputErrorClassName : ""}`}
                placeholder="your_username"
                {...register("username")}
              />
              {errors.username ? (
                <p className="mt-2 text-xs text-rose-300">
                  {errors.username.message}
                </p>
              ) : null}
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-200">
                Given Name
              </span>
              <input
                type="text"
                autoComplete="given-name"
                className={`${registerInputClassName} ${errors.given_name ? registerInputErrorClassName : ""}`}
                placeholder="First name"
                {...register("given_name")}
              />
              {errors.given_name ? (
                <p className="mt-2 text-xs text-rose-300">
                  {errors.given_name.message}
                </p>
              ) : null}
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-200">
                Family Name
              </span>
              <input
                type="text"
                autoComplete="family-name"
                className={`${registerInputClassName} ${errors.family_name ? registerInputErrorClassName : ""}`}
                placeholder="Last name"
                {...register("family_name")}
              />
              {errors.family_name ? (
                <p className="mt-2 text-xs text-rose-300">
                  {errors.family_name.message}
                </p>
              ) : null}
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-200">
                Birthdate
              </span>
              <input
                type="date"
                className={`${registerInputClassName} ${errors.birthdate ? registerInputErrorClassName : ""}`}
                {...register("birthdate")}
              />
              {errors.birthdate ? (
                <p className="mt-2 text-xs text-rose-300">
                  {errors.birthdate.message}
                </p>
              ) : null}
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-200">
                Address
              </span>
              <input
                type="text"
                autoComplete="street-address"
                className={`${registerInputClassName} ${errors.address ? registerInputErrorClassName : ""}`}
                placeholder="Your address"
                {...register("address")}
              />
              {errors.address ? (
                <p className="mt-2 text-xs text-rose-300">
                  {errors.address.message}
                </p>
              ) : null}
            </label>

            <label className="block sm:col-span-2">
              <span className="text-sm font-medium text-slate-200">
                Password
              </span>
              <input
                type="password"
                autoComplete="new-password"
                className={`${registerInputClassName} ${errors.password ? registerInputErrorClassName : ""}`}
                placeholder="Strong password"
                {...register("password")}
              />
              {errors.password ? (
                <p className="mt-2 text-xs text-rose-300">
                  {errors.password.message}
                </p>
              ) : (
                <p className="mt-2 text-xs text-slate-400">
                  Minimum 8 characters, including uppercase, lowercase, number,
                  and symbol.
                </p>
              )}
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="sm:col-span-2 inline-flex h-12 items-center justify-center rounded-xl bg-emerald-400 px-6 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Creating..." : "Create account"}
            </button>
          </form>

          <p className="mt-6 text-sm text-slate-300">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-emerald-300 transition hover:text-emerald-200"
            >
              Sign in
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
