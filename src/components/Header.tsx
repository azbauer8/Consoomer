"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  DramaIcon,
  FilmIcon,
  Gamepad2Icon,
  HomeIcon,
  TvIcon,
} from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Movies", href: "/movies", icon: FilmIcon },
  { name: "Shows", href: "/shows", icon: TvIcon },
  { name: "Games", href: "/games", icon: Gamepad2Icon },
]

export default function Header() {
  const pathname = usePathname()
  const relativePath = pathname.split("/").slice(0, 2).join("/")
  return (
    <div className="flex w-full items-center justify-between border-b bg-accent p-1.5">
      <Link
        className="group flex items-center gap-2 px-1.5 text-lg font-bold"
        href="/"
      >
        <DramaIcon className="size-6 text-foreground-muted group-hover:text-foreground" />
        Consoomer
      </Link>
      <nav className="hidden items-center gap-1 sm:flex">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={buttonVariants({
              variant: relativePath === link.href ? "outline" : "ghost",
            })}
          >
            <link.icon className="size-4" />
            {link.name}
          </Link>
        ))}
      </nav>
      <Select
        aria-label="Site Links Selection"
        selectedKey={relativePath}
        className="sm:hidden"
        placeholder="Not Found"
      >
        <SelectTrigger className="w-[125px]">
          <SelectValue />
        </SelectTrigger>
        <SelectPopover>
          <SelectContent aria-label="Site Links List">
            {links.map((link) => (
              <SelectItem key={link.name} href={link.href} id={link.href}>
                <link.icon className="size-4" />
                {link.name}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectPopover>
      </Select>
    </div>
  )
}
