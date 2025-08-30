import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function RecentPolls() {
  const recentPolls = [
    {
      id: "1",
      question: "What's your favorite programming language?",
      category: "Technology",
      votes: 156,
      status: "active",
      createdAt: "2 hours ago"
    },
    {
      id: "2",
      question: "Which movie should we watch this weekend?",
      category: "Entertainment",
      votes: 89,
      status: "active",
      createdAt: "1 day ago"
    },
    {
      id: "3",
      question: "Best pizza topping combination?",
      category: "Food",
      votes: 234,
      status: "expired",
      createdAt: "3 days ago"
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Polls</CardTitle>
        <CardDescription>
          Your latest poll creations and their current status
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentPolls.map((poll) => (
            <div key={poll.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{poll.question}</p>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">{poll.category}</Badge>
                  <Badge variant={poll.status === 'active' ? 'default' : 'destructive'}>
                    {poll.status === 'active' ? 'Active' : 'Expired'}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  {poll.votes} votes • {poll.createdAt}
                </p>
              </div>
              <Button variant="outline" size="sm">
                View
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
