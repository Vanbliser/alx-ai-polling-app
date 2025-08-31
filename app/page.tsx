import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { AuthNav } from "@/components/layout/auth-nav"

export const metadata: Metadata = {
  title: "Polling App - Create and Vote on Polls",
  description: "A modern platform for creating, sharing, and voting on polls with real-time results",
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-blue-600"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 0 0 3 3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3Z" />
              <path d="M10 6v12a3 3 0 0 1-3-3H6a3 3 0 0 1 3-3V6a3 3 0 0 1 3 3Z" />
            </svg>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">Polling App</span>
          </div>
          <AuthNav />
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Create Polls, Get
            <span className="text-blue-600 dark:text-blue-400"> Real Results</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Build engaging polls, gather opinions, and make data-driven decisions with our intuitive polling platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/polls">
              <Button size="lg" className="text-lg px-8 py-6">
                Browse Polls
              </Button>
            </Link>
            <Link href="/polls/create">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Create Your First Poll
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6 text-blue-600"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </div>
              <CardTitle>Easy Creation</CardTitle>
              <CardDescription>
                Create polls in seconds with our intuitive form builder
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6 text-green-600"
                >
                  <path d="M9 12l2 2 4-4" />
                  <path d="M21 12c-1 0-2-.4-2.8-1.2L12 2 5.8 8.2C5 9 4 9.4 3 9.4V12c0 1.1.9 2 2 2h16z" />
                </svg>
              </div>
              <CardTitle>Real-time Results</CardTitle>
              <CardDescription>
                See live updates as votes come in with instant analytics
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6 text-purple-600"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <CardTitle>Community Driven</CardTitle>
              <CardDescription>
                Share polls with your audience and gather diverse opinions
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card className="max-w-2xl mx-auto bg-blue-600 text-white border-blue-600">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
              <CardDescription className="text-blue-100">
                Join thousands of users making decisions together through polls
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/polls">
                <Button size="lg" variant="secondary" className="w-full">
                  Explore Polls Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-200 dark:border-gray-700">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 Polling App. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
