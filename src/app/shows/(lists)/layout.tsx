import PageTabs from "@/components/PageTabs"

export default function ShowsListLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="space-y-6">
      <PageTabs basePath="shows" />
      {children}
    </div>
  )
}
