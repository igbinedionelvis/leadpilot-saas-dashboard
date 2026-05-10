import { Badge } from '../../../components/ui/badge'
import { Card } from '../../../components/ui/card'

const stats = [
  { label: 'Qualified leads', value: '1,284', delta: '+12.8%' },
  { label: 'Active campaigns', value: '16', delta: '+3 this week' },
  { label: 'Reply rate', value: '28.4%', delta: '+1.7%' },
  { label: 'Pipeline value', value: '$184,320', delta: '+9.4%' },
]

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-2xl font-semibold text-slate-100">Dashboard</h1>
        <p className="mt-1 text-sm text-slate-400">
          Track performance across outbound, follow-ups, and pipeline momentum.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <Card key={item.label} className="space-y-2">
            <p className="text-sm text-slate-400">{item.label}</p>
            <p className="text-2xl font-semibold text-slate-100">{item.value}</p>
            <Badge className="w-fit border-emerald-800 bg-emerald-950/70 text-emerald-300">
              {item.delta}
            </Badge>
          </Card>
        ))}
      </section>

      <Card className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-100">Daily priorities</h2>
        <ul className="space-y-3 text-sm text-slate-300">
          <li className="rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2">
            Follow up with 24 leads that opened sequence #4 but did not respond.
          </li>
          <li className="rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2">
            Review ICP drift in the FinTech segment before launching next campaign.
          </li>
          <li className="rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2">
            Handoff 8 SQLs to sales owners and sync deal notes to CRM.
          </li>
        </ul>
      </Card>
    </div>
  )
}
