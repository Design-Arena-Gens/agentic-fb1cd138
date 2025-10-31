'use client';

import { useMemo } from "react";

const activityFeed = [
  {
    id: "sync",
    title: "Neural sync complete",
    timestamp: "14 seconds ago",
    status: "stable"
  },
  {
    id: "calibration",
    title: "Calibration sweep finished",
    timestamp: "3 minutes ago",
    status: "optimal"
  },
  {
    id: "deploy",
    title: "Last deployment verified",
    timestamp: "18 minutes ago",
    status: "green"
  }
];

const statusColor: Record<string, string> = {
  stable: "text-emerald-400",
  optimal: "text-sky-400",
  green: "text-lime-300"
};

export default function Hero() {
  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  }, []);

  return (
    <article className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-[0_25px_60px_-25px_rgba(15,23,42,0.7)] backdrop-blur">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-sky-400 to-emerald-400 opacity-70" />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">
            Transmission live
          </span>
          <h2 className="text-3xl font-semibold text-slate-100 md:text-4xl">
            {greeting}, Commander.
          </h2>
          <p className="max-w-xl text-base text-slate-300">
            Your mission control console is operational. Monitor live vitals,
            deploy agentic tasks, and maintain synchronization across the
            network.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {activityFeed.map((event) => (
            <div
              key={event.id}
              className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4 transition hover:border-slate-700"
            >
              <p className="text-sm text-slate-400">{event.timestamp}</p>
              <p className="mt-2 text-base font-semibold text-slate-100">
                {event.title}
              </p>
              <p className={`mt-3 text-xs uppercase tracking-[0.25em] ${statusColor[event.status]}`}>
                {event.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
