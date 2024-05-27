import PageTabs from "@/components/PageTabs"

export default function GamesListLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="space-y-6">
      <PageTabs basePath="games" />
      {children}
    </div>
  )
}
