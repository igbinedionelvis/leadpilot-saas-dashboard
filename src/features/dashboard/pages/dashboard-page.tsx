import { PageHeader } from "../../../components/ui/page-header";
import { SectionCard } from "../../../components/ui/section-card";
import { StatCard } from "../../../components/ui/stat-card";
import { useState } from "react";
import { PipelineChart } from "../components/pipeline-chart";
import { RecentLeads } from "../components/recent-leads";
import { ActivityFeed } from "../components/activity-feed";
import { LeadDetailsDrawer } from "../../leads/components/lead-details-drawer";
import type { Lead } from "../../leads/types";

const stats = [
  { label: "Qualified leads", value: "1,284", delta: "+12.8%" },
  { label: "Active campaigns", value: "16", delta: "+3 this week" },
  { label: "Reply rate", value: "28.4%", delta: "+1.7%" },
  { label: "Pipeline value", value: "$184,320", delta: "+9.4%" },
];

export function DashboardPage() {
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        description="Track performance across outbound, follow-ups, and pipeline momentum."
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <StatCard key={item.label} {...item} />
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <PipelineChart />
        <RecentLeads onSelectLead={setSelectedLead} />
      </section>

      <ActivityFeed />

      <SectionCard className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-100">
          Daily priorities
        </h2>
        <ul className="space-y-3 text-sm text-slate-300">
          <li className="rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2">
            Follow up with 24 leads that opened sequence #4 but did not respond.
          </li>
          <li className="rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2">
            Review ICP drift in the FinTech segment before launching next
            campaign.
          </li>
          <li className="rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2">
            Handoff 8 SQLs to sales owners and sync deal notes to CRM.
          </li>
        </ul>
      </SectionCard>

      <LeadDetailsDrawer
        lead={selectedLead}
        onClose={() => setSelectedLead(null)}
      />
    </div>
  );
}
