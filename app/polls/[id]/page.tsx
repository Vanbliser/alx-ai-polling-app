import { Metadata } from "next"
import { PollView } from "@/components/polls/poll-view"
import { PollResults } from "@/components/polls/poll-results"
import { PollComments } from "@/components/polls/poll-comments"

export const metadata: Metadata = {
  title: "Poll | Polling App",
  description: "View and vote on this poll",
}

interface PollPageProps {
  params: {
    id: string
  }
}

export default function PollPage({ params }: PollPageProps) {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 space-y-4">
          <PollView pollId={params.id} />
          <PollComments pollId={params.id} />
        </div>
        <div className="col-span-3">
          <PollResults pollId={params.id} />
        </div>
      </div>
    </div>
  )
}
