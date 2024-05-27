"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import {
  Button as _Button,
  type ButtonProps as _ButtonProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex gap-1 items-center justify-center whitespace-nowrap rounded-lg text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[97%] border border-transparent",
  {
    variants: {
      variant: {
        outline:
          "!border-border bg-transparent shadow-sm hover:bg-hover hover:text-foreground",
        ghost: "text-foreground-muted hover:text-foreground hover:bg-hover",
        link: "text-foreground underline-offset-4 hover:underline",
      },
      size: {
        default: "h-fit px-4 py-2",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-10 rounded-lg px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends _ButtonProps,
    VariantProps<typeof buttonVariants> {}

const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return (
    <_Button
      className={(values) =>
        cn(
          buttonVariants({
            variant,
            size,
            className:
              typeof className === "function" ? className(values) : className,
          })
        )
      }
      {...props}
    />
  )
}

export { Button, buttonVariants }
