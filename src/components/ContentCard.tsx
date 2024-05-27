import Image from "next/image"

export default function ContentCard({
  item,
}: {
  item: {
    title: string
    overview: string
    poster_path: string
  }
}) {
  return (
    <div className="min-w-44 overflow-hidden rounded-lg bg-accent sm:min-w-64">
      <Image
        src={item.poster_path}
        alt={item.title}
        className="aspect-[256/384] object-cover"
        height={384}
        width={256}
      />
      <div className="space-y-2 p-2">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="line-clamp-3 text-sm text-foreground-muted">
          {item.overview}
        </p>
      </div>
    </div>
  )
}
