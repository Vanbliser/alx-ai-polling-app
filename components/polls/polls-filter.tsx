import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function PollsFilter() {
  const filters = [
    { label: "All", value: "all", active: true },
    { label: "Technology", value: "technology", active: false },
    { label: "Politics", value: "politics", active: false },
    { label: "Entertainment", value: "entertainment", active: false },
    { label: "Sports", value: "sports", active: false },
    { label: "Food", value: "food", active: false },
    { label: "Other", value: "other", active: false },
  ]

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <Button
          key={filter.value}
          variant={filter.active ? "default" : "outline"}
          size="sm"
          className="h-8"
        >
          {filter.label}
        </Button>
      ))}
    </div>
  )
}
