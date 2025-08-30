import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface PollResultsProps {
  pollId: string
}

export function PollResults({ pollId }: PollResultsProps) {
  // Mock poll results data - in real app this would come from API
  const results = {
    totalVotes: 156,
    options: [
      { id: "1", text: "JavaScript", votes: 45, percentage: 28.8 },
      { id: "2", text: "Python", votes: 38, percentage: 24.4 },
      { id: "3", text: "Java", votes: 32, percentage: 20.5 },
      { id: "4", text: "C++", votes: 25, percentage: 16.0 },
      { id: "5", text: "Go", votes: 16, percentage: 10.3 }
    ]
  }

  const maxVotes = Math.max(...results.options.map(opt => opt.votes))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Poll Results</CardTitle>
        <CardDescription>
          {results.totalVotes} total votes
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {results.options.map((option) => (
          <div key={option.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{option.text}</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">
                  {option.votes} votes
                </span>
                <Badge variant="secondary">
                  {option.percentage.toFixed(1)}%
                </Badge>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(option.votes / maxVotes) * 100}%` }}
              />
            </div>
          </div>
        ))}
        
        <div className="pt-4 border-t">
          <div className="text-center text-sm text-muted-foreground">
            Results update in real-time
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
