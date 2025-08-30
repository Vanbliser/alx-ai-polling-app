import { Metadata } from "next"
import { PollsHeader } from "@/components/polls/polls-header"
import { PollsFilter } from "@/components/polls/polls-filter"
import { PollsGrid } from "@/components/polls/polls-grid"
import { CreatePollButton } from "@/components/polls/create-poll-button"

export const metadata: Metadata = {
  title: "Polls | Polling App",
  description: "Browse and vote on polls created by the community",
}

export default function PollsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Polls</h2>
        <CreatePollButton />
      </div>
      
      <PollsHeader />
      
      <div className="space-y-4">
        <PollsFilter />
        <PollsGrid />
      </div>
    </div>
  )
}
