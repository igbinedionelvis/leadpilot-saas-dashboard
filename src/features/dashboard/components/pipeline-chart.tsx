import { SectionCard } from "../../../components/ui/section-card";

const pipeline = [
  { stage: "New", count: 18 },
  { stage: "Qualified", count: 42 },
  { stage: "Contacted", count: 31 },
  { stage: "Negotiation", count: 15 },
  { stage: "Proposal", count: 8 },
  { stage: "Won", count: 4 },
];

export function PipelineChart() {
  const max = Math.max(...pipeline.map((item) => item.count));

  return (
    <SectionCard>
      <h2 className="mb-5 text-lg font-semibold text-slate-100">
        Pipeline Overview
      </h2>

      <div className="space-y-4">
        {pipeline.map((item) => (
          <div key={item.stage}>
            <div className="mb-1 flex justify-between text-sm">
              <span className="text-slate-300">{item.stage}</span>
              <span className="text-slate-400">{item.count}</span>
            </div>

            <div className="h-2 rounded-full bg-slate-800">
              <div
                className="h-2 rounded-full bg-cyan-400"
                style={{
                  width: `${(item.count / max) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
