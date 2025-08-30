"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface PollCommentsProps {
  pollId: string
}

export function PollComments({ pollId }: PollCommentsProps) {
  const [newComment, setNewComment] = useState("")
  const [comments, setComments] = useState([
    {
      id: "1",
      author: "Alice Johnson",
      content: "Great poll! I've been using JavaScript for years and it's definitely my go-to language.",
      timestamp: "2 hours ago",
      avatar: "/avatars/alice.jpg"
    },
    {
      id: "2",
      author: "Bob Smith",
      content: "Python is amazing for data science and automation. Highly recommend!",
      timestamp: "1 hour ago",
      avatar: "/avatars/bob.jpg"
    },
    {
      id: "3",
      author: "Carol Davis",
      content: "Java is still the king for enterprise applications. Nothing beats its ecosystem.",
      timestamp: "30 minutes ago",
      avatar: "/avatars/carol.jpg"
    }
  ])

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now().toString(),
        author: "You",
        content: newComment,
        timestamp: "Just now",
        avatar: "/avatars/you.jpg"
      }
      setComments([comment, ...comments])
      setNewComment("")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Comments ({comments.length})</CardTitle>
        <CardDescription>
          Join the discussion about this poll
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <Textarea
            placeholder="Add your comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="min-h-[100px]"
          />
          <Button 
            onClick={handleSubmitComment}
            disabled={!newComment.trim()}
            className="w-full"
          >
            Post Comment
          </Button>
        </div>

        <div className="space-y-4 pt-4">
          {comments.map((comment) => (
            <div key={comment.id} className="flex space-x-3 p-3 border rounded-lg">
              <Avatar className="h-8 w-8">
                <AvatarImage src={comment.avatar} alt={comment.author} />
                <AvatarFallback>
                  {comment.author.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">{comment.author}</span>
                  <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                </div>
                <p className="text-sm">{comment.content}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
