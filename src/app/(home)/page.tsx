import { getTMDBContentList, getTMDBMovies, getTMDBShows } from "@/lib/tmdb"
import ContentCard from "@/components/ContentCard"

export default async function Home() {
  const movies = await getTMDBMovies("popular")

  const shows = await getTMDBShows("popular")
  console.log("🚀 ~ Home ~ shows:", shows)

  return (
    <div className="space-y-6">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold md:text-3xl">Popular Movies</h2>
        <div className="flex gap-8 overflow-x-auto">
          {movies.results.map((item) => (
            <ContentCard key={item.title} item={item} />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold md:text-3xl">Popular Shows</h2>
        <div className="flex gap-8 overflow-x-auto">
          {shows.results.map((item) => (
            <ContentCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
