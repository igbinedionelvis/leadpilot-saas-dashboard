import { Badge } from '../../../components/ui/badge'
import { Button } from '../../../components/ui/button'
import { PageHeader } from '../../../components/ui/page-header'
import { SectionCard } from '../../../components/ui/section-card'

export function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Settings"
        description="Manage workspace preferences and prepare for backend integrations."
      />

      <div className="grid gap-4 xl:grid-cols-2">
        <SectionCard className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-100">Workspace</h2>
            <Badge>Starter</Badge>
          </div>
          <p className="text-sm text-slate-400">
            Configure naming conventions, timezone defaults, and campaign metadata.
          </p>
          <Button variant="ghost" className="w-fit">
            Edit workspace
          </Button>
        </SectionCard>

        <SectionCard className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-100">Integrations</h2>
            <Badge className="border-indigo-800 bg-indigo-950/80 text-indigo-300">Planned</Badge>
          </div>
          <p className="text-sm text-slate-400">
            Supabase auth and data sync can plug in here without changing page structure.
          </p>
          <Button variant="ghost" className="w-fit">
            Manage providers
          </Button>
        </SectionCard>
      </div>
    </div>
  )
}
