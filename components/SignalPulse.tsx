'use client';

import { useEffect, useState } from "react";

const MAX_STRENGTH = 100;

function generateStrength() {
  return 65 + Math.round(Math.random() * 35);
}

export default function SignalPulse() {
  const [strength, setStrength] = useState(generateStrength());

  useEffect(() => {
    const id = setInterval(() => {
      setStrength(generateStrength());
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-slate-950/90 p-6">
      <div className="absolute -left-24 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-emerald-500/15 blur-3xl" />
      <header className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-100">Signal Strength</h3>
        <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
          Live feed
        </span>
      </header>
      <div className="mt-6">
        <div className="relative h-2 overflow-hidden rounded-full bg-slate-800">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-emerald-500 via-sky-500 to-emerald-500 transition-all duration-700 ease-out"
            style={{ width: `${strength}%` }}
          />
        </div>
        <p className="mt-4 text-4xl font-semibold text-emerald-400">
          {strength}
          <span className="ml-1 text-base text-slate-400">/ {MAX_STRENGTH}</span>
        </p>
        <p className="mt-1 text-sm text-slate-400">
          Communication uplinks stable. No anomalies detected in the last ten minutes.
        </p>
      </div>
    </section>
  );
}
