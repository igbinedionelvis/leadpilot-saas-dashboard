import { SectionCard } from "../../../components/ui/section-card";

const funnel = [
  { label: "Leads", value: 100, width: "100%" },
  { label: "Contacted", value: 72, width: "80%" },
  { label: "Qualified", value: 43, width: "60%" },
  { label: "Meetings", value: 19, width: "40%" },
  { label: "Proposals", value: 8, width: "25%" },
  { label: "Closed", value: 4, width: "15%" },
];

export function ConversionFunnel() {
  return (
    <SectionCard>
      <h2 className="mb-5 text-lg font-semibold text-slate-100">
        Conversion Funnel
      </h2>

      <div className="space-y-3">
        {funnel.map((item) => (
          <div key={item.label}>
            <div
              className="rounded-lg bg-cyan-500 px-3 py-2 text-sm text-slate-950"
              style={{ width: item.width }}
            >
              {item.label} ({item.value})
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
