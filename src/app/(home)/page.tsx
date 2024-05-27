import { Suspense } from "react"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"

import { getTMDBMovies, getTMDBShows } from "@/lib/tmdb"
import { buttonVariants } from "@/components/ui/button.variants"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import ContentCard from "@/components/ContentCard"
import Loading from "@/components/Loading"

export default async function Home() {
  return (
    <div className="space-y-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold md:text-3xl">Popular Movies</h2>
          <Link
            href="/movies"
            className={buttonVariants({ variant: "outline" })}
          >
            All
          </Link>
        </div>
        <Suspense fallback={<Loading />}>
          <PopularMoviesList />
        </Suspense>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold md:text-3xl">Popular Shows</h2>
          <Link
            href="/shows"
            className={buttonVariants({ variant: "outline" })}
          >
            All
          </Link>
        </div>
        <Suspense fallback={<Loading />}>
          <PopularShowsList />
        </Suspense>
      </div>
    </div>
  )
}

async function PopularMoviesList() {
  const movies = await getTMDBMovies("popular")
  return (
    <Carousel opts={{ slidesToScroll: 3 }}>
      <CarouselContent>
        {movies.results.map(
          (item, index) =>
            index < 9 && (
              <CarouselItem className="md:basis-1/2 xl:basis-1/3" key={item.id}>
                <ContentCard key={item.title} item={item} />
              </CarouselItem>
            )
        )}
      </CarouselContent>
    </Carousel>
  )
}

async function PopularShowsList() {
  const shows = await getTMDBShows("popular")
  return (
    <Carousel opts={{ slidesToScroll: 3 }}>
      <CarouselContent>
        {shows.results.map(
          (item, index) =>
            index < 9 && (
              <CarouselItem className="md:basis-1/2 xl:basis-1/3" key={item.id}>
                <ContentCard key={item.title} item={item} />
              </CarouselItem>
            )
        )}
      </CarouselContent>
    </Carousel>
  )
}
