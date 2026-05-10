import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Badge } from '../../../components/ui/badge'
import { SectionCard } from '../../../components/ui/section-card'
import { LeadStatusBadge, OutreachStatusBadge } from './lead-status-badge'
import type { Lead } from '../types'

type LeadDetailsDrawerProps = {
  lead: Lead | null
  onClose: () => void
}

export function LeadDetailsDrawer({ lead, onClose }: LeadDetailsDrawerProps) {
  return (
    <AnimatePresence>
      {lead ? (
        <motion.div
          className="fixed inset-0 z-40 bg-slate-950/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.aside
            className="absolute right-0 top-0 h-full w-full max-w-xl overflow-y-auto border-l border-slate-800 bg-surface p-5 sm:p-6"
            initial={{ x: 40, opacity: 0.8 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 40, opacity: 0.8 }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-slate-500">{lead.industry}</p>
                <h2 className="mt-1 text-2xl font-semibold text-slate-100">{lead.company}</h2>
                <p className="mt-1 text-sm text-slate-400">
                  {lead.contactName} · {lead.contactRole}
                </p>
              </div>
              <button
                type="button"
                className="rounded-lg border border-slate-700 p-2 text-slate-300"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mb-5 flex flex-wrap gap-2">
              <LeadStatusBadge status={lead.status} />
              <OutreachStatusBadge status={lead.outreachStatus} />
              <Badge>Score {lead.score}</Badge>
            </div>

            <div className="space-y-4">
              <SectionCard className="space-y-2">
                <h3 className="text-sm font-semibold text-slate-100">Company details</h3>
                <p className="text-sm text-slate-300">Website: {lead.website}</p>
                <p className="text-sm text-slate-300">Team size: {lead.employeeRange}</p>
                <p className="text-sm text-slate-300">Source: {lead.source}</p>
                <p className="text-sm text-slate-300">Date added: {lead.dateAdded}</p>
              </SectionCard>

              <SectionCard className="space-y-2">
                <h3 className="text-sm font-semibold text-slate-100">Notes</h3>
                <p className="text-sm leading-relaxed text-slate-300">{lead.notes}</p>
              </SectionCard>

              <SectionCard className="space-y-2">
                <h3 className="text-sm font-semibold text-slate-100">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {lead.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </SectionCard>

              <SectionCard className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-100">Activity timeline</h3>
                <ol className="space-y-3">
                  {lead.timeline.map((item) => (
                    <li key={`${lead.id}-${item.time}`} className="rounded-lg bg-slate-900/70 px-3 py-2">
                      <p className="text-sm text-slate-200">{item.label}</p>
                      <p className="mt-1 text-xs text-slate-500">{item.time}</p>
                    </li>
                  ))}
                </ol>
              </SectionCard>
            </div>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
