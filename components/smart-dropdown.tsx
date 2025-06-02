"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

type Option = {
  value: string
  label: string
}

interface SmartDropdownProps {
  options: Option[]
  placeholder?: string
  emptyMessage?: string
  value?: string
  onValueChange?: (value: string) => void
  className?: string
}

export function SmartDropdown({
  options,
  placeholder = "Select an option...",
  emptyMessage = "No results found.",
  value,
  onValueChange,
  className,
}: SmartDropdownProps) {
  const [open, setOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState<string | undefined>(value)

  const handleSelect = React.useCallback(
    (currentValue: string) => {
      setSelectedValue(currentValue === selectedValue ? undefined : currentValue)
      onValueChange?.(currentValue === selectedValue ? "" : currentValue)
      setOpen(false)
    },
    [selectedValue, onValueChange],
  )

  const selectedOption = React.useMemo(
    () => options.find((option) => option.value === selectedValue),
    [options, selectedValue],
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-between", className)}
        >
          {selectedOption ? selectedOption.label : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
        <Command>
          <CommandInput placeholder={`Search ${placeholder.toLowerCase()}...`} className="h-9" />
          <CommandList>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            <CommandGroup className="max-h-60 overflow-auto">
              {options.map((option) => (
                <CommandItem key={option.value} value={option.value} onSelect={handleSelect}>
                  <Check className={cn("mr-2 h-4 w-4", selectedValue === option.value ? "opacity-100" : "opacity-0")} />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
