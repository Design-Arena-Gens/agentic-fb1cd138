type Evaluation = {
  label: string;
  score: number;
  summary: string;
};

async function loadEvaluations(): Promise<Evaluation[]> {
  await new Promise((resolve) => setTimeout(resolve, 450));
  return [
    {
      label: "Resilience",
      score: 92,
      summary: "Fault tolerance exceeds baseline. Redundant nodes online."
    },
    {
      label: "Alignment",
      score: 88,
      summary: "Policies synced across shards. Human-in-the-loop verified."
    },
    {
      label: "Momentum",
      score: 76,
      summary: "Mission backlog growing. Allocate additional agents soon."
    }
  ];
}

export default async function EvaluationPanel() {
  const evaluations = await loadEvaluations();

  return (
    <section className="flex flex-col gap-5 rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
      <header>
        <h3 className="text-lg font-semibold text-slate-100">Evaluation Matrix</h3>
        <p className="mt-1 text-sm text-slate-400">
          Deep diagnostics across key dimensions. Scores update every cycle.
        </p>
      </header>
      <div className="grid gap-4">
        {evaluations.map((item) => (
          <article
            key={item.label}
            className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-sm uppercase tracking-[0.2em] text-slate-500">
                {item.label}
              </h4>
              <span className="text-2xl font-semibold text-emerald-300">
                {item.score}
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-300">{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
