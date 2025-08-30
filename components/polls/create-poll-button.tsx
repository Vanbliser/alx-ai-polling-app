import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CreatePollButton() {
  return (
    <Link href="/polls/create">
      <Button size="lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="mr-2 h-4 w-4"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
        Create Poll
      </Button>
    </Link>
  )
}
