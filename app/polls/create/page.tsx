import { Metadata } from "next"
import { CreatePollForm } from "@/components/forms/create-poll-form"

export const metadata: Metadata = {
  title: "Create Poll | Polling App",
  description: "Create a new poll to gather opinions from the community",
}

export default function CreatePollPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Create New Poll</h2>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <CreatePollForm />
        </div>
        <div className="col-span-3">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-6">
              <h3 className="text-lg font-semibold">Tips for creating great polls</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Keep questions clear and concise</li>
                <li>• Provide balanced answer options</li>
                <li>• Set appropriate expiration dates</li>
                <li>• Use categories to organize your polls</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
