import { Badge } from './badge'
import { SectionCard } from './section-card'

type StatCardProps = {
  label: string
  value: string
  delta?: string
}

export function StatCard({ label, value, delta }: StatCardProps) {
  return (
    <SectionCard className="space-y-2">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="text-2xl font-semibold text-slate-100">{value}</p>
      {delta ? (
        <Badge className="w-fit border-emerald-800 bg-emerald-950/70 text-emerald-300">
          {delta}
        </Badge>
      ) : null}
    </SectionCard>
  )
}
