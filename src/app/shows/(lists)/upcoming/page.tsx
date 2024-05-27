import { Suspense } from "react"

import { getTMDBShows } from "@/lib/tmdb"
import ContentCard from "@/components/ContentCard"
import Loading from "@/components/Loading"

export default function UpcomingShows() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold md:text-3xl">Upcoming Shows</h2>
      <Suspense fallback={<Loading />}>
        <UpcomingShowsList />
      </Suspense>
    </div>
  )
}

async function UpcomingShowsList() {
  const shows = await getTMDBShows("on_the_air")
  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {shows.results.map((item) => (
        <ContentCard key={item.title} item={item} />
      ))}
    </section>
  )
}
