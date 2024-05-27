import Image from "next/image"
import { Star } from "lucide-react"

import { TMDBContent } from "@/lib/tmdb"
import { formatDate } from "@/lib/utils"

export default function ContentCard({ item }: { item: TMDBContent }) {
  return (
    <div className="flex gap-2 rounded-lg border bg-accent p-2">
      <Image
        src={item.poster_path}
        alt={item.title}
        className="rounded-lg"
        height={192}
        width={128}
      />
      <div className="flex-1 space-y-2">
        <h2 className="text-2xl font-bold">{item.title}</h2>
        <div className="flex items-center justify-between">
          <p>{formatDate(item.release_date)}</p>
          <p className="flex items-center gap-1">
            <Star className="size-4 fill-yellow-500 text-yellow-500" />
            {item.vote_average.toFixed(1)}
          </p>
        </div>
      </div>
    </div>
  )
}
