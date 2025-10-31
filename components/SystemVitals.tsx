'use client';

const vitals = [
  {
    label: "Core latency",
    value: "42ms",
    trend: "-3.2%",
    trendPositive: true
  },
  {
    label: "Agent uptime",
    value: "99.982%",
    trend: "+0.4%",
    trendPositive: true
  },
  {
    label: "Load factor",
    value: "0.62",
    trend: "+0.08",
    trendPositive: false
  }
];

export default function SystemVitals() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
      <header className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-100">System Vitals</h3>
        <span className="text-xs uppercase tracking-[0.3em] text-slate-500">Stable</span>
      </header>
      <div className="mt-6 grid gap-4">
        {vitals.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/50 p-4"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                {item.label}
              </p>
              <p className="mt-2 text-2xl font-semibold text-slate-100">{item.value}</p>
            </div>
            <div
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                item.trendPositive
                  ? "bg-emerald-500/10 text-emerald-300"
                  : "bg-rose-500/10 text-rose-300"
              }`}
            >
              {item.trend}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
