type PageHeaderProps = {
  title: string
  description: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="space-y-1">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-100">{title}</h1>
      <p className="text-sm text-slate-400">{description}</p>
    </section>
  )
}
