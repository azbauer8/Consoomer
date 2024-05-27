"use client"

import { type VariantProps } from "class-variance-authority"
import {
  Button as _Button,
  type ButtonProps as _ButtonProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button.variants"

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
