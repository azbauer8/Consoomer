import { Suspense } from "react"

import { getTMDBMovies } from "@/lib/tmdb"
import ContentCard from "@/components/ContentCard"
import Loading from "@/components/Loading"

export default function PopularMovies() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold md:text-3xl">Upcoming Movies</h2>
      <Suspense fallback={<Loading />}>
        <BestMoviesList />
      </Suspense>
    </div>
  )
}

async function BestMoviesList() {
  const movies = await getTMDBMovies("upcoming")
  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {movies.results.map((item) => (
        <ContentCard key={item.title} item={item} />
      ))}
    </section>
  )
}
