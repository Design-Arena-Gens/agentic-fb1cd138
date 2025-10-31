'use client';

import { useMemo, useState } from "react";

type MissionPhase = "Analysis" | "Synthesis" | "Deployment";

const defaultTasks: Record<MissionPhase, string[]> = {
  Analysis: ["Harvest telemetry", "Map anomalies", "Prioritize signals"],
  Synthesis: ["Draft strategy brief", "Simulate agent paths", "Verify guardrails"],
  Deployment: ["Authorize release", "Monitor rollout", "Capture feedback"]
};

export default function MissionPlanner() {
  const [selectedPhase, setSelectedPhase] = useState<MissionPhase>("Analysis");
  const tasks = useMemo(() => defaultTasks[selectedPhase], [selectedPhase]);

  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
      <header className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-100">Mission Planner</h3>
        <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
          {selectedPhase}
        </span>
      </header>
      <div className="mt-5 flex gap-2">
        {Object.keys(defaultTasks).map((phase) => (
          <button
            key={phase}
            type="button"
            onClick={() => setSelectedPhase(phase as MissionPhase)}
            className={`flex-1 rounded-full border px-3 py-2 text-sm transition ${
              selectedPhase === phase
                ? "border-emerald-400 bg-emerald-500/10 text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.25)]"
                : "border-slate-800 bg-slate-950/40 text-slate-400 hover:border-slate-700 hover:text-slate-200"
            }`}
          >
            {phase}
          </button>
        ))}
      </div>
      <ul className="mt-6 space-y-3">
        {tasks.map((task) => (
          <li
            key={task}
            className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/40 p-4"
          >
            <span className="mt-1 inline-block h-2.5 w-2.5 flex-shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
            <div>
              <p className="text-sm font-medium text-slate-100">{task}</p>
              <p className="mt-1 text-xs text-slate-400">
                Auto-sync enabled. Timeline aligned with system vitals.
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
