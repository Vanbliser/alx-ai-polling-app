"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface PollViewProps {
  pollId: string
}

export function PollView({ pollId }: PollViewProps) {
  const [selectedOption, setSelectedOption] = useState<string>("")
  const [hasVoted, setHasVoted] = useState<boolean>(false)

  // Mock poll data - in real app this would come from API
  const poll = {
    id: pollId,
    question: "What's your favorite programming language?",
    description: "Let's see which language the community prefers for development. This poll will help us understand the most popular choices among developers.",
    category: "Technology",
    options: [
      { id: "1", text: "JavaScript", votes: 45 },
      { id: "2", text: "Python", votes: 38 },
      { id: "3", text: "Java", votes: 32 },
      { id: "4", text: "C++", votes: 25 },
      { id: "5", text: "Go", votes: 16 }
    ],
    totalVotes: 156,
    status: "active",
    expiresAt: "2024-01-15",
    author: "John Doe",
    allowMultiple: false,
    anonymous: false
  }

  const handleVote = () => {
    if (selectedOption) {
      setHasVoted(true)
      // In real app, this would make an API call
    }
  }

  if (hasVoted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Thank you for voting!</CardTitle>
          <CardDescription>
            Your vote has been recorded. You can view the results below.
          </CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="secondary">{poll.category}</Badge>
          <Badge variant={poll.status === 'active' ? 'default' : 'destructive'}>
            {poll.status === 'active' ? 'Active' : 'Expired'}
          </Badge>
        </div>
        <CardTitle className="text-2xl">{poll.question}</CardTitle>
        <CardDescription className="text-base">
          {poll.description}
        </CardDescription>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <span>By {poll.author}</span>
          <span>•</span>
          <span>{poll.totalVotes} total votes</span>
          <span>•</span>
          <span>Expires {poll.expiresAt}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
            {poll.options.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <RadioGroupItem value={option.id} id={option.id} />
                <Label htmlFor={option.id} className="text-base cursor-pointer">
                  {option.text}
                </Label>
              </div>
            ))}
          </RadioGroup>
          
          <Button 
            onClick={handleVote} 
            disabled={!selectedOption || poll.status !== 'active'}
            className="w-full"
          >
            Vote Now
          </Button>
          
          {poll.status !== 'active' && (
            <p className="text-center text-sm text-muted-foreground">
              This poll has expired and is no longer accepting votes.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
