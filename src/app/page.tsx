import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.25),_transparent_45%),radial-gradient(circle_at_80%_20%,_rgba(14,165,233,0.2),_transparent_35%)]" />

      <section className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-20 text-center sm:px-10">
        <p className="mb-4 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-sm uppercase tracking-[0.2em] text-emerald-300">
          Cognito Workshop
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
          Build secure authentication flows with confidence.
        </h1>

        <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
          Create, test, and ship user authentication experiences powered by
          Amazon Cognito.
        </p>

        <div className="mt-10 flex w-full max-w-sm flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/login"
            className="inline-flex h-12 flex-1 items-center justify-center rounded-full bg-emerald-400 px-6 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="inline-flex h-12 flex-1 items-center justify-center rounded-full border border-slate-300/40 bg-white/5 px-6 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
          >
            Register
          </Link>
        </div>
      </section>
    </main>
  );
}
