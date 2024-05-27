import { Suspense } from "react"

import { getTMDBShows } from "@/lib/tmdb"
import ContentCard from "@/components/ContentCard"
import Loading from "@/components/Loading"

export default function BestShows() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold md:text-3xl">Best Shows</h2>
      <Suspense fallback={<Loading />}>
        <BestShowsList />
      </Suspense>
    </div>
  )
}

async function BestShowsList() {
  const shows = await getTMDBShows("top_rated")
  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {shows.results.map((item) => (
        <ContentCard key={item.title} item={item} />
      ))}
    </section>
  )
}
