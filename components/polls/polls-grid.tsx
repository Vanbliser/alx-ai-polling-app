import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PollsGrid() {
  const polls = [
    {
      id: "1",
      question: "What's your favorite programming language?",
      description: "Let's see which language the community prefers for development",
      category: "Technology",
      votes: 156,
      options: 5,
      status: "active",
      expiresAt: "2024-01-15",
      author: "John Doe"
    },
    {
      id: "2",
      question: "Which movie should we watch this weekend?",
      description: "Help us decide on the perfect movie for our movie night",
      category: "Entertainment",
      votes: 89,
      options: 4,
      status: "active",
      expiresAt: "2024-01-10",
      author: "Jane Smith"
    },
    {
      id: "3",
      question: "Best pizza topping combination?",
      description: "What's your go-to pizza order?",
      category: "Food",
      votes: 234,
      options: 6,
      status: "expired",
      expiresAt: "2024-01-05",
      author: "Mike Johnson"
    },
    {
      id: "4",
      question: "Preferred workout time of day?",
      description: "When do you find it easiest to exercise?",
      category: "Health",
      votes: 67,
      options: 4,
      status: "active",
      expiresAt: "2024-01-20",
      author: "Sarah Wilson"
    }
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {polls.map((poll) => (
        <Card key={poll.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge variant="secondary">{poll.category}</Badge>
              <Badge variant={poll.status === 'active' ? 'default' : 'destructive'}>
                {poll.status === 'active' ? 'Active' : 'Expired'}
              </Badge>
            </div>
            <CardTitle className="line-clamp-2">{poll.question}</CardTitle>
            <CardDescription className="line-clamp-2">
              {poll.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{poll.votes} votes</span>
                <span>{poll.options} options</span>
              </div>
              <div className="text-xs text-muted-foreground">
                By {poll.author} • Expires {poll.expiresAt}
              </div>
              <Link href={`/polls/${poll.id}`} className="w-full">
                <Button className="w-full" variant="outline">
                  {poll.status === 'active' ? 'Vote Now' : 'View Results'}
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
