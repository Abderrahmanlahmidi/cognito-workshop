"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  verifyEmailDefaultValues,
  verifyEmailInputClassName,
  verifyEmailInputErrorClassName,
  VerifyEmailFormValues,
  verifyEmailSchema,
} from "@/constants/verifyEmailConstants";
import { confirmSignUp } from "aws-amplify/auth";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { useForm } from "react-hook-form";

type AuthError = {
  message?: string;
};

function VerifyEmailPageContent() {
  const [isVerified, setIsVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const identifier = searchParams.get("identifier");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<VerifyEmailFormValues>({
    resolver: zodResolver(verifyEmailSchema),
    mode: "onTouched",
    defaultValues: verifyEmailDefaultValues,
  });

  const onSubmit = async (formValues: VerifyEmailFormValues) => {
    setErrorMessage(null);

   console.log(formValues);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.2),_transparent_45%),radial-gradient(circle_at_80%_20%,_rgba(14,165,233,0.2),_transparent_35%)]" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-4xl items-center justify-center px-6 py-16 sm:px-10">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_0_40px_rgba(2,6,23,0.5)] backdrop-blur sm:p-8">
          <div className="mb-8">
            <p className="inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-amber-300">
              Verify Email
            </p>
            <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Confirm your account
            </h1>
            <p className="mt-2 text-sm text-slate-300 sm:text-base">
              Enter the verification code sent to your email.
            </p>

            {errorMessage ? (
              <p className="mt-4 rounded-xl border border-rose-400/30 bg-rose-400/10 px-4 py-2 text-sm text-rose-200">
                {errorMessage}
              </p>
            ) : null}
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-5"
          >
            <label className="block">
              <span className="text-sm font-medium text-slate-200">
                Verification Code
              </span>
              <input
                type="text"
                inputMode="numeric"
                maxLength={6}
                className={`${verifyEmailInputClassName} ${errors.code ? verifyEmailInputErrorClassName : ""}`}
                placeholder="123456"
                {...register("code")}
              />
              {errors.code ? (
                <p className="mt-2 text-xs text-rose-300">
                  {errors.code.message}
                </p>
              ) : null}
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-emerald-400 px-6 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Verifying..." : "Verify email"}
            </button>
          </form>

          {isVerified ? (
            <p className="mt-4 rounded-xl border border-emerald-300/30 bg-emerald-300/10 px-4 py-3 text-sm text-emerald-200">
              Email verification completed. Redirecting to login...
            </p>
          ) : null}

          <p className="mt-6 text-sm text-slate-300">
            Back to{" "}
            <Link
              href="/register"
              className="font-semibold text-emerald-300 transition hover:text-emerald-200"
            >
              Register
            </Link>
            {" or "}
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

export default function VerifyEmailPage() {
  return (
    <Suspense
      fallback={
        <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
          <section className="mx-auto flex min-h-screen w-full max-w-4xl items-center justify-center px-6 py-16 sm:px-10">
            <p className="text-sm text-slate-300">Loading verification form...</p>
          </section>
        </main>
      }
    >
      <VerifyEmailPageContent />
    </Suspense>
  );
}
