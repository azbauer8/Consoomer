"use client"

import * as React from "react"
import { Check, ChevronDown } from "lucide-react"
import {
  Button,
  ButtonProps,
  Collection,
  Header,
  ListBox,
  ListBoxItem,
  ListBoxItemProps,
  ListBoxProps,
  Popover,
  PopoverProps,
  Section,
  Select,
  SelectValue,
  SelectValueProps,
  Separator,
  SeparatorProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const _Select = Select

const SelectSection = Section

const SelectCollection = Collection

const _SelectValue = <T extends object>({
  className,
  ...props
}: SelectValueProps<T>) => (
  <SelectValue
    className={(values) =>
      cn(
        "flex items-center gap-2 data-[placeholder]:text-foreground-muted",
        typeof className === "function" ? className(values) : className
      )
    }
    {...props}
  />
)

const SelectTrigger = ({ className, children, ...props }: ButtonProps) => (
  <Button
    className={(values) =>
      cn(
        "border-input flex h-10 w-full items-center justify-between rounded-md border bg-background px-3 py-2 text-sm data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[focused]:outline-none",
        typeof className === "function" ? className(values) : className
      )
    }
    {...props}
  >
    {(values) => (typeof children === "function" ? children(values) : children)}
  </Button>
)

const SelectHeader = ({
  className,
  ...props
}: React.ComponentProps<typeof Header>) => (
  <Header
    className={cn(" py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
)

const SelectItem = ({ className, children, ...props }: ListBoxItemProps) => (
  <ListBoxItem
    className={(values) =>
      cn(
        "data-[focused]:text-accent-foreground relative flex w-full cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[focused]:bg-accent data-[disabled]:opacity-50",
        typeof className === "function" ? className(values) : className
      )
    }
    {...props}
  >
    {(values) => (typeof children === "function" ? children(values) : children)}
  </ListBoxItem>
)

const SelectSeparator = ({ className, ...props }: SeparatorProps) => (
  <Separator
    className={cn("-mx-1 my-1 h-px bg-accent", className)}
    {...props}
  />
)

const SelectPopover = ({ className, offset = 0, ...props }: PopoverProps) => (
  <Popover
    offset={offset}
    className={(values) =>
      cn(
        "text-popover-foreground relative z-50 w-[--trigger-width] min-w-[8rem] overflow-y-auto rounded-md border bg-background shadow-md data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2",
        "data-[placement=bottom]:translate-x-1.5 data-[placement=bottom]:translate-y-0.5 data-[placement=left]:-translate-x-1 data-[placement=right]:translate-x-1 data-[placement=top]:-translate-y-1",
        typeof className === "function" ? className(values) : className
      )
    }
    {...props}
  />
)

const SelectContent = <T extends object>({
  className,
  ...props
}: ListBoxProps<T>) => (
  <ListBox
    className={(values) =>
      cn("p-1", typeof className === "function" ? className(values) : className)
    }
    {...props}
  />
)

export {
  _Select as Select,
  SelectSection,
  _SelectValue as SelectValue,
  SelectContent,
  SelectTrigger,
  SelectHeader,
  SelectItem,
  SelectSeparator,
  SelectPopover,
  SelectCollection,
}
export type { PopoverProps as SelectPopoverProps }
