"use client";

import { useForm } from "@/hooks/useForm";
import Link from "next/link";

const inputClassName =
  "mt-2 w-full rounded-xl border border-slate-700/70 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20";

type RegisterFormValues = {
  email: string;
  username: string;
  given_name: string;
  family_name: string;
  birthdate: string;
  address: string;
  password: string;
};

export default function RegisterPage() {
  
  const { values, handleChange, handleSubmit, isSubmitting } =
    useForm<RegisterFormValues>({
      email: "",
      username: "",
      given_name: "",
      family_name: "",
      birthdate: "",
      address: "",
      password: "",
    });

  const onSubmit = async (formValues: RegisterFormValues) => {
    console.log(formValues);
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
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          >
            <label className="block">
              <span className="text-sm font-medium text-slate-200">Email</span>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
                className={inputClassName}
                placeholder="you@example.com"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-200">
                Username
              </span>
              <input
                type="text"
                name="username"
                required
                autoComplete="username"
                value={values.username}
                onChange={handleChange}
                className={inputClassName}
                placeholder="your_username"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-200">
                Given Name
              </span>
              <input
                type="text"
                name="given_name"
                required
                autoComplete="given-name"
                value={values.given_name}
                onChange={handleChange}
                className={inputClassName}
                placeholder="First name"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-200">
                Family Name
              </span>
              <input
                type="text"
                name="family_name"
                required
                autoComplete="family-name"
                value={values.family_name}
                onChange={handleChange}
                className={inputClassName}
                placeholder="Last name"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-200">
                Birthdate
              </span>
              <input
                type="date"
                name="birthdate"
                required
                value={values.birthdate}
                onChange={handleChange}
                className={inputClassName}
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-200">
                Address
              </span>
              <input
                type="text"
                name="address"
                required
                autoComplete="street-address"
                value={values.address}
                onChange={handleChange}
                className={inputClassName}
                placeholder="Your address"
              />
            </label>

            <label className="block sm:col-span-2">
              <span className="text-sm font-medium text-slate-200">
                Password
              </span>
              <input
                type="password"
                name="password"
                required
                minLength={8}
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$"
                autoComplete="new-password"
                value={values.password}
                onChange={handleChange}
                className={inputClassName}
                placeholder="Strong password"
              />
              <p className="mt-2 text-xs text-slate-400">
                Minimum 8 characters, including uppercase, lowercase, number,
                and symbol.
              </p>
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
