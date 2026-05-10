import { MoreHorizontal } from 'lucide-react'
import { useState } from 'react'

type LeadRowActionsProps = {
  onOpen: () => void
}

export function LeadRowActions({ onOpen }: LeadRowActionsProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="relative flex justify-end"
      onClick={(event) => event.stopPropagation()}
      onKeyDown={(event) => event.stopPropagation()}
    >
      <button
        type="button"
        className="rounded-lg border border-transparent p-1.5 text-slate-400 transition hover:border-slate-700 hover:bg-slate-900 hover:text-slate-200"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <MoreHorizontal className="h-4 w-4" />
      </button>

      {isOpen ? (
        <div className="absolute right-0 top-10 z-20 w-40 rounded-xl border border-slate-700 bg-slate-950 p-1.5 shadow-soft">
          <button
            type="button"
            className="w-full rounded-lg px-3 py-2 text-left text-sm text-slate-300 hover:bg-slate-900"
            onClick={() => {
              onOpen()
              setIsOpen(false)
            }}
          >
            View details
          </button>
          <button
            type="button"
            className="w-full rounded-lg px-3 py-2 text-left text-sm text-slate-300 hover:bg-slate-900"
            onClick={() => setIsOpen(false)}
          >
            Add note
          </button>
          <button
            type="button"
            className="w-full rounded-lg px-3 py-2 text-left text-sm text-slate-300 hover:bg-slate-900"
            onClick={() => setIsOpen(false)}
          >
            Update status
          </button>
        </div>
      ) : null}
    </div>
  )
}
