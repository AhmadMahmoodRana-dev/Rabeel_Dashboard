import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectButton() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Year" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">2024</SelectItem>
          <SelectItem value="banana">2025</SelectItem>
          <SelectItem value="blueberry">2026</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
