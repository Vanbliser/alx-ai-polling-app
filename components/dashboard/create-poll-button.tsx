import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export function CreatePollButton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>
          Get started with creating new polls
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Link href="/polls/create" className="w-full">
          <Button className="w-full" size="lg">
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
            Create New Poll
          </Button>
        </Link>
        
        <div className="text-sm text-muted-foreground">
          <p>• Create polls in seconds</p>
          <p>• Share with your audience</p>
          <p>• Get real-time results</p>
        </div>
      </CardContent>
    </Card>
  )
}
