import type { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-800 bg-surface-muted p-5 shadow-soft transition-all duration-200 hover:border-slate-700 hover:shadow-lg hover:-translate-y-1",
        className,
      )}
      {...props}
    />
  );
}
