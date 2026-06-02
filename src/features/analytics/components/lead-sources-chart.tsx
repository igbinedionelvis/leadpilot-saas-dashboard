import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { SectionCard } from "../../../components/ui/section-card";

export function LeadSourcesChart() {
  const sourceData = [
    { source: "LinkedIn", count: 54 },
    { source: "Referral", count: 32 },
    { source: "Website", count: 27 },
    { source: "Cold Email", count: 18 },
    { source: "Product Hunt", count: 12 },
  ];

  return (
    <SectionCard className="h-[320px]">
      <h2 className="mb-4 text-lg font-semibold text-slate-100">
        Lead Sources
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={sourceData}>
          <XAxis dataKey="source" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />
          <Bar dataKey="count" fill="#818cf8" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </SectionCard>
  );
}
