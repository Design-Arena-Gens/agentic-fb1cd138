import Link from "next/link";
import { Suspense } from "react";
import EvaluationPanel from "@/components/EvaluationPanel";
import Hero from "@/components/Hero";
import MissionPlanner from "@/components/MissionPlanner";
import SignalPulse from "@/components/SignalPulse";
import SystemVitals from "@/components/SystemVitals";

export default function Home() {
  return (
    <main className="px-6 py-10 md:px-12 lg:px-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Agentic Command Console
            </p>
            <h1 className="mt-2 text-4xl font-semibold text-slate-100 md:text-5xl">
              Hello, Commander.
            </h1>
          </div>
          <Link
            href="https://nextjs.org"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:text-white"
          >
            View Docs ↗
          </Link>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <Hero />
          <div className="flex flex-col gap-8">
            <SignalPulse />
            <SystemVitals />
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <MissionPlanner />
          <Suspense fallback={<div className="h-full rounded-2xl bg-slate-900/60" />}>
            <EvaluationPanel />
          </Suspense>
        </section>

        <footer className="flex flex-col items-start gap-3 border-t border-slate-800 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <span>Autonomously generated interface · {new Date().getFullYear()}</span>
          <span>
            Deployed with{" "}
            <Link
              href="https://vercel.com"
              className="font-medium text-slate-200 transition hover:text-white"
            >
              Vercel
            </Link>
          </span>
        </footer>
      </div>
    </main>
  );
}
