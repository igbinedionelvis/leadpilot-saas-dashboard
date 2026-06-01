import { Calendar, Mail, Plus, RefreshCcw } from "lucide-react";
import { SectionCard } from "../../../components/ui/section-card";

const activities = [
  {
    action: "Meeting booked with Northbeam Labs",
    time: "09:22",
    icon: Calendar,
  },
  {
    action: "Proposal sent to SignalForge",
    time: "10:15",
    icon: Mail,
  },
  {
    action: "New lead added: NovaStack",
    time: "11:30",
    icon: Plus,
  },
  {
    action: "Lead moved to Negotiation",
    time: "12:45",
    icon: RefreshCcw,
  },
];

export function ActivityFeed() {
  return (
    <SectionCard>
      <h2 className="mb-5 text-lg font-semibold text-slate-100">
        Activity Feed
      </h2>

      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div key={activity.action} className="flex gap-3">
              <div className="rounded-full bg-slate-800 p-2">
                <Icon className="h-4 w-4 text-cyan-400" />
              </div>

              <div>
                <p className="text-sm text-slate-200">{activity.action}</p>

                <p className="text-xs text-slate-500">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
}
