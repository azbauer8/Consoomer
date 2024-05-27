import { Suspense } from "react"

import { getTMDBShows } from "@/lib/tmdb"
import ContentCard from "@/components/ContentCard"
import Loading from "@/components/Loading"

export default function PopularShows() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold md:text-3xl">Popular Shows</h2>
      <Suspense fallback={<Loading />}>
        <PopularShowsList />
      </Suspense>
    </div>
  )
}

async function PopularShowsList() {
  const shows = await getTMDBShows("popular")
  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {shows.results.map((item) => (
        <ContentCard key={item.title} item={item} />
      ))}
    </section>
  )
}
