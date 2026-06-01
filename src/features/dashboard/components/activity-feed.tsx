import { SectionCard } from "../../../components/ui/section-card";

const activities = [
  {
    action: "Meeting booked with Northbeam Labs",
    time: "09:22",
  },
  {
    action: "Proposal sent to SignalForge",
    time: "10:15",
  },
  {
    action: "New lead added: NovaStack",
    time: "11:30",
  },
  {
    action: "Lead moved to Negotiation",
    time: "12:45",
  },
];

export function ActivityFeed() {
  return (
    <SectionCard>
      <h2 className="mb-5 text-lg font-semibold text-slate-100">
        Activity Feed
      </h2>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.action} className="flex gap-3">
            <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />

            <div>
              <p className="text-sm text-slate-200">{activity.action}</p>

              <p className="text-xs text-slate-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
