import { z } from "zod"

export const createPollSchema = z.object({
  question: z.string().min(10, "Question must be at least 10 characters long"),
  description: z.string().optional(),
  category: z.string().min(1, "Please select a category"),
  options: z.array(z.string().min(1, "Option cannot be empty")).min(2, "At least 2 options are required").max(10, "Maximum 10 options allowed"),
  expiresAt: z.string().optional(),
  allowMultiple: z.boolean().default(false),
  anonymous: z.boolean().default(false),
})

export const voteSchema = z.object({
  pollId: z.string().min(1, "Poll ID is required"),
  optionIds: z.array(z.string()).min(1, "At least one option must be selected"),
})

export const commentSchema = z.object({
  pollId: z.string().min(1, "Poll ID is required"),
  content: z.string().min(1, "Comment cannot be empty").max(500, "Comment must be less than 500 characters"),
})

export type CreatePollInput = z.infer<typeof createPollSchema>
export type VoteInput = z.infer<typeof voteSchema>
export type CommentInput = z.infer<typeof commentSchema>
