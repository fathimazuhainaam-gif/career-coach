# Career Coach

**Career Coach** is a full-stack Next.js 14 application designed to help users build resumes, write cover letters, prepare for interviews, and manage other career-related tasks using AI-driven features. The project integrates with Prisma ORM and Inngest for background jobs, and uses Tailwind CSS for styling.

---

## 🚀 Features

- **AI-powered Resume Builder**: Create and edit resumes with intelligent suggestions.
- **Cover Letter Generator**: Write personalized cover letters using AI prompts.
- **Interview Preparation**: Practice quizzes, performance charts, and mock interviews.
- **User Authentication**: Sign-up/sign-in flows managed in the `(auth)` route.
- **Dashboard**: View summary of activities and AI-generated content.
- **Onboarding Wizard**: Assist new users with profile setup.
- **Background Processing**: Inngest functions for asynchronous tasks (e.g. email, notifications).
- **Prisma Database**: PostgreSQL-backed schema with migrations managed in `prisma/`.
- **Responsive UI**: Built with Tailwind CSS and accessible components.


## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript / React
- **Styling**: Tailwind CSS
- **ORM**: Prisma (Postgres)
- **Background Jobs**: Inngest
- **State Management**: Local React state / hooks
- **Components**: Modular React components in `components/`


## 📦 Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/your-org/career-coach.git
   cd career-coach
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables. Copy `.env.example` to `.env` and fill in values:
   ```text
   DATABASE_URL=postgresql://user:password@localhost:5432/career_coach
   NEXTAUTH_URL=http://localhost:3000
   # other keys as required
   ```

4. Generate Prisma client and run migrations:
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

5. Start development server:
   ```bash
   npm run dev
   ```

Visit `http://localhost:3000` in your browser.


## 🔧 Environment Variables

The app uses the following environment variables (add others as needed):

```env
DATABASE_URL
NEXTAUTH_URL
# Add any API keys for AI services, Inngest, etc.
```


## 🧩 Database

The Prisma schema is located in `prisma/schema.prisma`. To apply new migrations or reset the database:

```bash
npx prisma migrate dev   # apply migrations and open prisma studio
npx prisma migrate reset  # reset the database (development only)
```

View data with Prisma Studio:

```bash
npx prisma studio
```


## 📁 Project Structure

```
app/           # Next.js App Router pages and layouts
components/    # Reusable UI components
lib/           # Helper utilities and Prisma client
hooks/         # Custom React hooks
actions/       # Server-side actions / API handlers
prisma/        # Prisma schema and migrations
public/        # Static assets
```


## 🧠 AI and Background Processing

AI functionality is encapsulated in components and Inngest functions. Look at `lib/inngest/` and `actions/` for implementation details.


## ✅ Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/foo`.
3. Commit your changes: `git commit -m "feat: add foo"`.
4. Push to the branch: `git push origin feature/foo`.
5. Open a pull request.

Please follow conventional commits and update tests as necessary.


## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> Built with 💡 by the Career Coach team.
