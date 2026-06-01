import { SectionCard } from "../../../components/ui/section-card";
import { LeadStatusBadge } from "../../leads/components/lead-status-badge";
import { mockLeads } from "../../leads/data/mock-leads";
import type { Lead } from "../../leads/types";

type Props = {
  onSelectLead: (lead: Lead) => void;
};

export function RecentLeads({ onSelectLead }: Props) {
  const leads = mockLeads.slice(0, 5);

  return (
    <SectionCard>
      <h2 className="mb-5 text-lg font-semibold text-slate-100">
        Recent Leads
      </h2>

      <div className="space-y-3">
        {leads.map((lead) => (
          <button
            key={lead.id}
            onClick={() => onSelectLead(lead)}
            className="flex w-full items-center justify-between rounded-xl border border-slate-800 bg-slate-900/40 p-3 text-left hover:bg-slate-900"
          >
            <div>
              <p className="font-medium text-slate-100">{lead.company}</p>
              <p className="text-xs text-slate-500">{lead.contactName}</p>
            </div>

            <LeadStatusBadge status={lead.status} />
          </button>
        ))}
      </div>
    </SectionCard>
  );
}
