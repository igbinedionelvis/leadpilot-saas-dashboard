import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { PageHeader } from '../../../components/ui/page-header'
import { SectionCard } from '../../../components/ui/section-card'

const chartData = [
  { day: 'Mon', replies: 26, meetings: 7 },
  { day: 'Tue', replies: 32, meetings: 8 },
  { day: 'Wed', replies: 35, meetings: 9 },
  { day: 'Thu', replies: 30, meetings: 7 },
  { day: 'Fri', replies: 38, meetings: 10 },
  { day: 'Sat', replies: 20, meetings: 4 },
  { day: 'Sun', replies: 24, meetings: 5 },
]

export function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Analytics"
        description="Understand outbound performance and conversion trends over time."
      />

      <SectionCard className="h-[380px]">
        <h2 className="mb-4 text-lg font-semibold text-slate-100">Weekly performance</h2>
        <ResponsiveContainer width="100%" height="90%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#23314b" />
            <XAxis dataKey="day" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                background: '#0f172a',
                border: '1px solid #334155',
                borderRadius: '10px',
              }}
            />
            <Line type="monotone" dataKey="replies" stroke="#818cf8" strokeWidth={2.5} />
            <Line type="monotone" dataKey="meetings" stroke="#22d3ee" strokeWidth={2.5} />
          </LineChart>
        </ResponsiveContainer>
      </SectionCard>
    </div>
  )
}
