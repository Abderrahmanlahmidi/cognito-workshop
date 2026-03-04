"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginDefaultValues,
  loginInputClassName,
  loginInputErrorClassName,
  LoginFormValues,
  loginSchema,
} from "@/constants/loginConstants";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
    defaultValues: loginDefaultValues,
  });

  const onSubmit = async (formValues: LoginFormValues) => {
    console.log(formValues);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.22),_transparent_45%),radial-gradient(circle_at_80%_20%,_rgba(14,165,233,0.2),_transparent_35%)]" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-4xl items-center justify-center px-6 py-16 sm:px-10">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_0_40px_rgba(2,6,23,0.5)] backdrop-blur sm:p-8">
          <div className="mb-8">
            <p className="inline-flex rounded-full border border-sky-300/30 bg-sky-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-sky-300">
              Login
            </p>
            <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Sign in to your account
            </h1>
            <p className="mt-2 text-sm text-slate-300 sm:text-base">
              Use your email or username with your password.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="mx-auto w-full max-w-sm space-y-5"
          >
            <label className="block">
              <span className="text-sm font-medium text-slate-200">
                Identifier (Email or Username)
              </span>
              <input
                type="text"
                autoComplete="username"
                className={`${loginInputClassName} ${errors.identifier ? loginInputErrorClassName : ""}`}
                placeholder="you@example.com or username"
                {...register("identifier")}
              />
              {errors.identifier ? (
                <p className="mt-2 text-xs text-rose-300">
                  {errors.identifier.message}
                </p>
              ) : null}
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-200">
                Password
              </span>
              <input
                type="password"
                autoComplete="current-password"
                className={`${loginInputClassName} ${errors.password ? loginInputErrorClassName : ""}`}
                placeholder="Your password"
                {...register("password")}
              />
              {errors.password ? (
                <p className="mt-2 text-xs text-rose-300">
                  {errors.password.message}
                </p>
              ) : null}
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-emerald-400 px-6 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <p className="mt-6 text-sm text-slate-300">
            No account yet?{" "}
            <Link
              href="/register"
              className="font-semibold text-emerald-300 transition hover:text-emerald-200"
            >
              Create one
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
