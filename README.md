# Polling App

A modern Next.js application for creating and managing polls with real-time voting and results.

## Features

- **User Authentication**: Secure login and registration system
- **Poll Management**: Create, view, and manage polls
- **Real-time Voting**: Vote on polls and see live results
- **Dashboard**: Personal dashboard with poll statistics
- **Responsive Design**: Modern UI built with Shadcn components

## Project Structure

```
polling-app/
├── app/                          # Next.js app directory
│   ├── (auth)/                  # Authentication routes (grouped)
│   │   ├── login/              # Login page
│   │   └── register/           # Registration page
│   ├── (dashboard)/            # Dashboard routes (grouped)
│   │   └── dashboard/          # User dashboard
│   ├── polls/                  # Poll-related routes
│   │   ├── create/             # Create new poll
│   │   └── [id]/               # Individual poll view
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── components/                  # Reusable components
│   ├── ui/                     # Shadcn UI components
│   ├── auth/                   # Authentication components
│   ├── dashboard/              # Dashboard components
│   ├── forms/                  # Form components
│   ├── layout/                 # Layout components
│   └── polls/                  # Poll-related components
├── lib/                        # Utility libraries
│   ├── types/                  # TypeScript type definitions
│   ├── validations/            # Form validation schemas
│   ├── auth/                   # Authentication utilities
│   ├── db/                     # Database utilities
│   └── utils.ts                # General utilities
├── public/                     # Static assets
└── package.json                # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Shadcn/ui
- **Validation**: Zod
- **Authentication**: JWT (placeholder)
- **Database**: MongoDB (placeholder)

## Key Components

### Authentication
- Login and registration forms
- JWT-based authentication (placeholder)
- Protected routes

### Polls
- Create poll form with dynamic options
- Poll listing with search and filters
- Individual poll view with voting
- Real-time results display
- Comments system

### Dashboard
- User statistics and metrics
- Recent polls overview
- Quick actions

## Development Status

This is a scaffolded project with placeholder components and mock data. The following areas need implementation:

- [ ] Database integration
- [ ] Authentication system
- [ ] API endpoints
- [ ] Real-time updates
- [ ] User management
- [ ] Poll analytics
- [ ] Testing setup

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details
