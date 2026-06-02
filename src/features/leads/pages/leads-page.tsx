import {
  type ColumnFiltersState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "../../../components/ui/button";
import { PageHeader } from "../../../components/ui/page-header";
import { SectionCard } from "../../../components/ui/section-card";
import { LeadDetailsDrawer } from "../components/lead-details-drawer";
import { LeadRowActions } from "../components/lead-row-actions";
import { LeadStatusBadge } from "../components/lead-status-badge";
import { mockLeads } from "../data/mock-leads";
import type { Lead } from "../types";

const columnHelper = createColumnHelper<Lead>();

export function LeadsPage() {
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const columns = useMemo(
    () => [
      columnHelper.accessor("company", {
        header: "Company",
        cell: ({ row }) => (
          <div>
            <p className="font-medium text-slate-100">{row.original.company}</p>
            <p className="text-xs text-slate-500">{row.original.contactName}</p>
          </div>
        ),
      }),
      columnHelper.accessor("industry", {
        header: "Industry",
        meta: { className: "hidden md:table-cell" },
      }),
      columnHelper.accessor("status", {
        header: "Status",
        cell: (info) => <LeadStatusBadge status={info.getValue()} />,
      }),
      columnHelper.accessor("score", {
        header: "Score",
        cell: (info) => (
          <span className="font-medium text-slate-100">{info.getValue()}</span>
        ),
      }),
      columnHelper.accessor("source", {
        header: "Source",
        meta: { className: "hidden lg:table-cell" },
      }),
      columnHelper.accessor("dateAdded", {
        header: "Date Added",
        meta: { className: "hidden xl:table-cell" },
      }),
      columnHelper.display({
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <LeadRowActions onOpen={() => setSelectedLead(row.original)} />
        ),
      }),
    ],
    [],
  );

  // TanStack Table hook is intentionally used here for controlled table state.
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: mockLeads,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
    state: { globalFilter, columnFilters },
    initialState: { pagination: { pageSize: 6 } },
  });

  const statusFilter =
    (table.getColumn("status")?.getFilterValue() as string | undefined) ??
    "All";
  const industryFilter =
    (table.getColumn("industry")?.getFilterValue() as string | undefined) ??
    "All";

  return (
    <div className="space-y-6">
      <PageHeader
        title="Leads"
        description="Prioritize high-intent prospects with flexible filters and scoring."
      />

      <SectionCard className="space-y-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <label className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-400 transition-all duration-200 focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-400/20">
            <Search className="h-4 w-4" />
            <input
              value={globalFilter}
              onChange={(event) => setGlobalFilter(event.target.value)}
              placeholder="Search company, contact, or industry..."
              className="w-full bg-transparent text-slate-200 outline-none placeholder:text-slate-500 focus:text-white"
            />
          </label>

          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
            <select
              value={statusFilter}
              onChange={(event) =>
                table
                  .getColumn("status")
                  ?.setFilterValue(
                    event.target.value === "All"
                      ? undefined
                      : event.target.value,
                  )
              }
              className="w-full sm:w-auto rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200 outline-none"
            >
              <option>All</option>
              <option>New</option>
              <option>Contacted</option>
              <option>Qualified</option>
              <option>Proposal Sent</option>
              <option>Negotiation</option>
            </select>

            <select
              value={industryFilter}
              onChange={(event) =>
                table
                  .getColumn("industry")
                  ?.setFilterValue(
                    event.target.value === "All"
                      ? undefined
                      : event.target.value,
                  )
              }
              className="w-full sm:w-auto rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200 outline-none"
            >
              <option>All</option>
              {Array.from(new Set(mockLeads.map((lead) => lead.industry))).map(
                (industry) => (
                  <option key={industry}>{industry}</option>
                ),
              )}
            </select>
          </div>
        </div>
      </SectionCard>

      <SectionCard className="overflow-hidden p-0">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="border-b border-slate-800 bg-slate-900/70 text-slate-400">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className={`px-4 py-3 font-medium ${(header.column.columnDef.meta as { className?: string } | undefined)?.className ?? ""}`}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-500">
                    No leads found. Try adjusting your filters.
                  </td>
                </tr>
              ) : (
                table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    className="cursor-pointer border-b border-slate-800/80 transition-all duration-200 hover:bg-slate-900/60 hover:translate-x-1 last:border-none"
                    onClick={() => setSelectedLead(row.original)}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className={`px-4 py-3 text-slate-200 ${
                          (
                            cell.column.columnDef.meta as
                              | { className?: string }
                              | undefined
                          )?.className ?? ""
                        }`}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-slate-800 bg-slate-900/40 px-4 py-3 text-sm sm:flex-row sm:items-center">
          <p className="text-slate-400">
            Showing {table.getRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} filtered leads
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <span className="text-slate-400">
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </span>
            <Button
              variant="ghost"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </SectionCard>

      <LeadDetailsDrawer
        lead={selectedLead}
        onClose={() => setSelectedLead(null)}
      />
    </div>
  );
}
