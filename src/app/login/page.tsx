"use client";

import { useForm } from "@/hooks/useForm";
import Link from "next/link";

const inputClassName =
  "mt-2 w-full rounded-xl border border-slate-700/70 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20";

type LoginFormValues = {
  identifier: string;
  password: string;
};

export default function LoginPage() {
  const { values, handleChange, handleSubmit, isSubmitting } =
    useForm<LoginFormValues>({
      identifier: "",
      password: "",
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
            className="mx-auto w-full max-w-sm space-y-5"
          >
            <label className="block">
              <span className="text-sm font-medium text-slate-200">
               Email
              </span>
              <input
                type="text"
                name="identifier"
                required
                autoComplete="username"
                value={values.identifier}
                onChange={handleChange}
                className={inputClassName}
                placeholder="you@example.com or username"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-200">
                Password
              </span>
              <input
                type="password"
                name="password"
                required
                autoComplete="current-password"
                value={values.password}
                onChange={handleChange}
                className={inputClassName}
                placeholder="Your password"
              />
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
