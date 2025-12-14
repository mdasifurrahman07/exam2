# ExamPortal - Online Exam Platform

A full-stack exam management system built with Next.js 14, MongoDB, and NextAuth.

## Features

### Student Features
- User registration and authentication
- Browse available exams
- Take timed exams with MCQ questions
- Real-time countdown timer
- Tab switch detection (anti-cheat)
- Instant results with detailed answer review
- Personal dashboard with statistics
- Profile page with performance metrics

### Admin Features
- Separate admin dashboard
- Create and manage exams
- Add multiple-choice questions
- View all students and their performance
- Platform statistics overview
- Exam management (edit, preview, delete)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Database**: MongoDB with Mongoose
- **Authentication**: NextAuth.js with JWT
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Password Hashing**: bcryptjs

## Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB database (local or cloud)

### Environment Variables

Create a `.env.local` file in the root directory:

\`\`\`env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret_key
NEXTAUTH_URL=http://localhost:3000
\`\`\`

### Installation

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

3. Open [http://localhost:3000](http://localhost:3000)

### Creating an Admin User

By default, all registered users are students. To create an admin:

1. Register a new account
2. Manually update the user's role in MongoDB:
\`\`\`javascript
db.users.updateOne(
  { email: "admin@example.com" },
  { $set: { role: "admin" } }
)
\`\`\`

## Project Structure

\`\`\`
app/
├── (public pages)
│   ├── page.tsx              # Landing page
│   ├── login/                # Login page
│   └── register/             # Registration page
├── dashboard/                # Student dashboard
│   ├── page.tsx              # Dashboard home
│   ├── exams/                # Browse exams
│   ├── exam/[id]/            # Take exam
│   ├── result/[id]/          # View results
│   └── profile/              # User profile
├── admin/                    # Admin panel
│   ├── page.tsx              # Admin dashboard
│   ├── exams/                # Manage exams
│   ├── exam/[id]/questions/  # Add questions
│   └── students/             # View students
├── actions/                  # Server actions
│   ├── auth.ts               # Authentication actions
│   ├── exam.ts               # Exam submission
│   └── admin.ts              # Admin actions
└── api/
    └── auth/[...nextauth]/   # NextAuth API route

components/
├── ui/                       # shadcn/ui components
├── dashboard-nav.tsx         # Student navigation
├── admin-nav.tsx             # Admin navigation
└── exam-interface.tsx        # Exam taking UI

models/
├── User.ts                   # User schema
├── Exam.ts                   # Exam schema
├── Question.ts               # Question schema
└── Result.ts                 # Result schema

lib/
├── db.ts                     # MongoDB connection
└── auth.ts                   # NextAuth configuration
\`\`\`

## Database Models

### User
- name, email, password (hashed)
- role: "student" | "admin"
- createdAt

### Exam
- title, description, subject
- duration (minutes), totalMarks
- status: "draft" | "published" | "archived"
- createdAt

### Question
- examId (reference)
- question text
- options (array of strings)
- correctAnswer
- createdAt

### Result
- userId, examId (references)
- score, totalMarks
- answers (array with questionId, chosenOption, isCorrect)
- timeTaken (seconds)
- completedAt

## Features in Detail

### Authentication
- Secure password hashing with bcryptjs
- JWT-based sessions with NextAuth
- Role-based access control
- Protected routes with middleware

### Exam System
- Countdown timer with auto-submit
- Question navigation
- Progress tracking
- Answer auto-save
- Tab switch detection
- Randomized question order (can be enabled)

### Results
- Immediate score calculation
- Detailed answer review
- Performance analytics
- Time tracking

### Admin Panel
- Clean dashboard layout
- Exam creation wizard
- Question management
- Student performance overview
- Platform statistics

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### MongoDB Atlas

1. Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Get your connection string
3. Add to `MONGODB_URI` environment variable

## Security Features

- Password hashing with bcryptjs
- JWT token authentication
- Role-based authorization
- Protected API routes
- Server-side validation
- Anti-cheat tab detection

## Future Enhancements

- Question categories/tags
- Exam scheduling
- Email notifications
- Certificate generation
- Advanced analytics
- Question bank management
- Bulk question import
- Dark mode toggle
- Mobile app

## License

MIT License - feel free to use this project for learning or commercial purposes.
\`\`\`

```json file="" isHidden
