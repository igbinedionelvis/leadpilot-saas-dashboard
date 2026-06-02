import { Badge } from "../../../components/ui/badge";
import type { LeadStatus, OutreachStatus } from "../types";

const statusClassMap: Record<LeadStatus, string> = {
  New: "border-slate-600 bg-slate-800 text-slate-200",
  Contacted: "border-sky-800 bg-sky-950/70 text-sky-300",
  Qualified: "border-emerald-800 bg-emerald-950/70 text-emerald-300",
  "Proposal Sent": "border-indigo-800 bg-indigo-950/70 text-indigo-300",
  Negotiation: "border-violet-800 bg-violet-950/70 text-violet-300",
};

const outreachClassMap: Record<OutreachStatus, string> = {
  "Not Started": "border-slate-600 bg-slate-800 text-slate-200",
  "Sequence Live": "border-amber-800 bg-amber-950/70 text-amber-300",
  Replied: "border-cyan-800 bg-cyan-950/70 text-cyan-300",
  "Meeting Booked": "border-emerald-800 bg-emerald-950/70 text-emerald-300",
};

export function LeadStatusBadge({ status }: { status: LeadStatus }) {
  return <Badge className={statusClassMap[status]}>{status}</Badge>;
}

export function OutreachStatusBadge({ status }: { status: OutreachStatus }) {
  return <Badge className={outreachClassMap[status]}>{status}</Badge>;
}
