# 📚 StudyTogether

**StudyTogether** is a full-stack, AI-powered collaborative learning platform that helps students organize, study, and grow together. It features real-time group collaboration, task management, smart AI chat assistant, and gamification to improve learning productivity.

![StudyTogether Banner](./assets/banner.png) <!-- Optional banner -->

---

## 🚀 Features

- ✅ **Firebase Authentication** with Google OAuth
- 📊 **Dashboard** with sidebar, user info & recent activity
- 👥 **Smart Study Group Matching** (with filters)
- 🧠 **AI Assistant** powered by OpenRouter (LLaMA 3.3)
- 📝 **Real-time Shared Notes** (Firebase sync)
- 🧩 **Kanban Task Board** (To Do / In Progress / Done)
- 💬 **Study Group Chat**
- 🏆 **Gamification System** (badges, leaderboard)
- 👨‍🏫 **Admin Panel** with user analytics and control

---

## ⚙️ Tech Stack

| Technology         | Description                  |
| ------------------ | ---------------------------- |
| **React + Vite**   | Frontend Framework           |
| **TypeScript**     | Type Safety                  |
| **Tailwind CSS**   | Styling                      |
| **Firebase**       | Auth, Firestore, Realtime DB |
| **React Router**   | Navigation                   |
| **OpenRouter API** | LLaMA 3.3 AI Integration     |
| **Framer Motion**  | Animations                   |
| **Lucide Icons**   | UI Icons                     |

---

## 🧠 AI Integration

- **Model**: `meta-llama/llama-3.3-8b-instruct:free`
- **Provider**: [OpenRouter](https://openrouter.ai)
- **API Endpoint**: `https://openrouter.ai/api/v1/chat/completions`

`.env.local` file:

```env
VITE_OPENROUTER_API_KEY=sk-or-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


🧪 Setup & Run Locally

# 1. Clone the repo
git clone https://github.com/your-username/studytogether.git
cd studytogether

# 2. Install dependencies
npm install

# 3. Create .env.local
touch .env.local
# Add your OpenRouter + Firebase keys here

# 4. Start development server
npm run dev


🌐 Live Demo
🔗 Deployed URL: Not published yet (update this after deployment)

🧙‍♂️ Contribution Guide
Want to contribute? Great!

Fork the repository

Create a feature branch (git checkout -b feature/feature-name)

Commit changes (git commit -m "Added new feature")

Push to your branch (git push origin feature/feature-name)

Create a Pull Request


📦 Deployment
Frontend: Vercel

Backend / Auth / DB: [Firebase Hosting + Firestore]

🛡️ Security & Best Practices
Firebase rules for access control

API key managed via .env.local

All requests authenticated with Firebase user token

Public routes separated from protected routes

📌 Credits
Icons: Lucide

AI Models: OpenRouter (Meta's LLaMA)

Design: Uizard, Visily, Relume

Team:

📜 License
This project is licensed under the MIT License.

💬 Contact
For queries or support:
📧 Email: bayzidalways@gmail.com
🔗 LinkedIn: https://www.linkedin.com/in/md-bayzid-211b67345/

```
