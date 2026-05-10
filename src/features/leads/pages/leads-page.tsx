import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Card } from '../../../components/ui/card'

type Lead = {
  name: string
  company: string
  status: 'New' | 'Contacted' | 'Qualified'
  score: number
}

const leads: Lead[] = [
  { name: 'Nora Evans', company: 'Northbeam', status: 'Qualified', score: 91 },
  { name: 'Elias Kim', company: 'ShiftLayer', status: 'Contacted', score: 77 },
  { name: 'Lena Patel', company: 'OpenDrive', status: 'New', score: 68 },
  { name: 'Mason Cruz', company: 'FluxOps', status: 'Qualified', score: 89 },
]

const columnHelper = createColumnHelper<Lead>()

const columns = [
  columnHelper.accessor('name', { header: 'Contact' }),
  columnHelper.accessor('company', { header: 'Company' }),
  columnHelper.accessor('status', { header: 'Status' }),
  columnHelper.accessor('score', { header: 'Lead score' }),
]

export function LeadsPage() {
  // TanStack Table hook is intentionally used here for controlled table state.
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: leads,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-2xl font-semibold text-slate-100">Leads</h1>
        <p className="mt-1 text-sm text-slate-400">
          Prioritize high-intent prospects with flexible filters and scoring.
        </p>
      </section>

      <Card className="overflow-hidden p-0">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-800 bg-slate-900/70 text-slate-400">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-4 py-3 font-medium">
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-b border-slate-800/80 last:border-none">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-3 text-slate-200">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}
