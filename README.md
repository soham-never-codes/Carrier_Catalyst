# 🚀 Carrier Catalyst

**Carrier Catalyst** is a full-stack AI-powered job recommendation and career assistant platform. It helps users build standout resumes and cover letters, assess their skills through mock interviews and quizzes, and soon—get job recommendations tailored to their profile.

---

## ✨ Features

### 🧠 AI-Powered Tools
- ✍️ **AI Resume & Cover Letter Generator**
- 🤖 **Mock Interview Assistant**
- 📈 **Quiz & Skill Assessment**

### 📄 Resume Builder
- Form-based and Markdown editor
- Save, edit, preview, and download as PDF

### 💼 Career Tools
- Personalized job recommendations (coming soon)
- Industry-specific templates

### 📊 Analytics & Performance
- MCQ-based skill quizzes
- Interview performance chart
- Insightful user dashboard

---

## 🛠️ Tech Stack

| Layer        | Tech Used                           |
| ------------ | ----------------------------------- |
| **Frontend** | React.js, Next.js (App Router), Tailwind CSS, ShadCN/UI |
| **Backend**  | Node.js, Express.js                 |
| **Database** | PostgreSQL with Prisma ORM          |
| **AI**       | OpenAI API                          |
| **Auth**     | Clerk.dev                           |
| **Others**   | Inngest (job queues), Sonner (toasts), html2pdf.js |

---

## 🧱 Folder Structure
carrier-catalyst/
├── app/
│ ├── (auth)/ # Auth pages
│ ├── (main)/ # Main features like resume, interview, etc.
│ ├── layout.js # App layout
│ └── page.jsx # Landing page
├── components/ # UI & Reusable Components
├── data/ # Static content: FAQs, features, etc.
├── hooks/ # Custom hooks (e.g., useFetch)
├── lib/ # Utilities, Prisma, Inngest setup
├── prisma/ # DB schema and migrations
├── public/ # Static files (images, logo)
├── styles/ # Tailwind and custom styles
├── .env # Environment variables
└── README.md # You're here!


---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/soham-never-codes/Carrier_Catalyst.git
cd Carrier_Catalyst
npm install
```

### Configure Environment Variables
Create a .env file at the root:


# OpenAI
```bash
OPENAI_API_KEY=your-openai-api-key
```

# Clerk (Authentication)
```bash
CLERK_SECRET_KEY=your-clerk-secret-key
CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
NEXT_PUBLIC_CLERK_FRONTEND_API=your-clerk-frontend-api
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

# Database
```bash
DATABASE_URL="file:./dev.db"
```
Run the Development Server
```bash
npm run dev
```
