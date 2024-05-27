"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Calendar, Flame, Trophy } from "lucide-react"

import { cn } from "@/lib/utils"

export default function PageTabs({ basePath }: { basePath: string }) {
  return (
    <div className="inline-flex h-10 w-full items-center rounded-md bg-accent p-1 text-foreground-muted">
      <div aria-label="Page Tabs" className="grid w-full grid-cols-3 gap-1">
        <Tab href={`/${basePath}`} title="Popular" icon={<Flame />} />
        <Tab
          href={`/${basePath}/upcoming`}
          title="Upcoming"
          icon={<Calendar />}
        />
        <Tab href={`/${basePath}/best`} title="Best" icon={<Trophy />} />
      </div>
    </div>
  )
}

function Tab({
  href,
  title,
  icon,
}: {
  href: string
  title: string
  icon: JSX.Element
}) {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={cn(
        "sm:text-basea flex items-center justify-center gap-1.5 rounded-sm px-3 py-1.5 text-center text-sm font-medium",
        pathname === href && "bg-background text-foreground"
      )}
    >
      {icon}
      {title}
    </Link>
  )
}
