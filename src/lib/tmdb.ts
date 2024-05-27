const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_KEY}`,
  },
}

export async function getTMDBContentList(
  type: "movie" | "tv",
  list: "popular" | "upcoming" | "top_rated" | "on_the_air",
  page: number = 1
) {
  const response: TMDBContentList = await fetch(
    `https://api.themoviedb.org/3/${type}/${list}?page=${page}`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err))

  return {
    ...response,
    results: response.results.map((item) => ({
      ...item,
      poster_path: getTMDBContentPoster(item.poster_path),
      backdrop_path: getTMDBContentPoster(item.backdrop_path),
    })),
  }
}

export async function getTMDBMovies(
  list: "popular" | "upcoming" | "top_rated",
  page: number = 1
) {
  const movies = await getTMDBContentList("movie", list, page)
  return {
    ...movies,
    results: movies.results as TMDBContent[],
  }
}

export async function getTMDBShows(
  list: "popular" | "upcoming" | "top_rated" | "on_the_air",
  page: number = 1
) {
  const shows = await getTMDBContentList("tv", list, page)
  return {
    ...shows,
    results: shows.results.map((show: any) => ({
      ...show,
      title: show.name,
      original_title: show.original_name,
      release_date: show.first_air_date,
    })) as TMDBContent[],
  }
}

export function getTMDBContentPoster(path: string) {
  return `https://image.tmdb.org/t/p/original/${path}`
}

type TMDBContentList = {
  page: number
  total_pages: number
  total_results: number
  results: TMDBContent[]
}

export type TMDBContent = {
  id: number
  overview: string
  popularity: number
  poster_path: string
  backdrop_path: string
  genre_ids: number[]
  vote_average: number
  vote_count: number
  adult: boolean
  original_language: string
  video: boolean
  title: string
  original_title: string
  release_date: string
}
