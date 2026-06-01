import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { SectionCard } from "../../../components/ui/section-card";

const pipelineData = [
  { stage: "New", count: 18 },
  { stage: "Contacted", count: 31 },
  { stage: "Qualified", count: 42 },
  { stage: "Proposal", count: 8 },
  { stage: "Negotiation", count: 15 },
];

export function PipelineDistributionChart() {
  return (
    <SectionCard className="h-[320px]">
      <h2 className="mb-4 text-lg font-semibold text-slate-100">
        Pipeline Distribution
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={pipelineData}>
          <XAxis dataKey="stage" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />
          <Bar dataKey="count" fill="#22d3ee" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </SectionCard>
  );
}
