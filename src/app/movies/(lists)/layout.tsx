import PageTabs from "@/components/PageTabs"

export default function MoviesListLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="space-y-6">
      <PageTabs basePath="movies" />
      {children}
    </div>
  )
}
