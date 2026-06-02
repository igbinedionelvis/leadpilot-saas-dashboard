import { PieChart, Pie, ResponsiveContainer, Tooltip, Legend } from "recharts";

import { SectionCard } from "../../../components/ui/section-card";

export function IndustryBreakdownChart() {
  const industryData = [
    { name: "SaaS", value: 44, fill: "#818cf8" },
    { name: "FinTech", value: 28, fill: "#22d3ee" },
    { name: "AI", value: 19, fill: "#8b5cf6" },
    { name: "HealthTech", value: 13, fill: "#10b981" },
  ];

  return (
    <SectionCard className="h-[320px]">
      <h2 className="mb-4 text-lg font-semibold text-slate-100">
        Industry Breakdown
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={industryData}
            dataKey="value"
            nameKey="name"
            outerRadius={90}
          />

          <Tooltip />

          <Legend
            wrapperStyle={{
              color: "#cbd5e1",
              fontSize: "14px",
              paddingTop: "12px",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </SectionCard>
  );
}
