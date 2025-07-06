# 🎬 Netflix GPT

A smart Netflix-like movie streaming app with AI-powered search capabilities built using **React**, **Tailwind CSS**, **Redux**, **Firebase**, and **Gemini API**.

> 🔍 Powered by Google Gemini & TMDB API  
> 📦 Styled with Tailwind CSS  
> 🔥 Auth backed by Firebase  
> 🧠 Movie recommendations using AI

---

## 🚀 Features

### ✅ Authentication

- 🔐 **Login / Sign Up** using Firebase
- 🔁 Redirect users between login and browse pages
- 🧾 Form validation using `useRef`
- 🔓 Logout & Profile update functionality

### 🏠 Browse Page

- 🎥 Movie trailer background
- 🎞️ Now Playing & Popular movie listings
- 🎬 Responsive movie cards UI
- 🧩 Modular component architecture

### 🧠 Netflix GPT (AI Search)

- 🤖 Gemini AI integrated search bar
- 📽️ Smart movie suggestions using GPT + TMDB
- 🌐 Multi-language support
- 🔄 Reused components with memoization for performance

---

## 🛠️ Tech Stack

| Tech             | Purpose            |
| ---------------- | ------------------ |
| ⚛️ React         | Frontend UI        |
| 🎨 Tailwind CSS  | Styling            |
| 🔥 Firebase      | Auth & hosting     |
| 🌍 TMDB API      | Movie data         |
| 🤖 Gemini API    | AI-powered search  |
| 🧠 Redux Toolkit | State management   |
| 🧪 useRef Hook   | DOM manipulation   |
| 🔗 React Router  | Routing            |
| 📁 .env          | API key management |

---

## 📦 Project Structure

```
📁 src
├── components/
├── hooks/
├── pages/
├── redux/
├── utils/
├── App.js
└── index.js
```

---

## 📜 Major Implementation Milestones

- ✅ **Create React App** setup
- 🎨 Tailwind CSS configuration
- 🛣️ React Router integration
- 🧾 Login & Sign Up forms with validation
- 🔥 Firebase auth implementation
- 🧠 Redux Store + `userSlice`, `movieSlice`, `gptSlice`
- 🍿 TMDB API integration for:
  - Now Playing
  - Popular Movies
  - Trailer videos
- 🤖 Integrated Gemini API for GPT search
- 📺 Embedded YouTube trailer player
- 📱 Fully responsive layout
- 🌐 Multi-language support
- 📦 Environment variable management (.env)

---

## 📷 Preview

> _Add screenshots or GIF here for visual representation_

---

## 🧠 Upcoming Improvements (Ideas 💡)

- Add pagination to movie lists
- Implement favorites/watchlist feature
- Enhance recommendation logic with user history
- UI/UX polish & animations

---

## 🧪 Installation

```bash
git clone https://github.com/heyrajaman/netflix-gpt.git
cd netflix-gpt
npm install
npm run dev  # or npm start
```

> ⚠️ Make sure to create a `.env` file and add your TMDB & Gemini API keys

---

## 🤝 Contributing

Contributions are welcome!  
Please open issues and pull requests for improvements or fixes.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🔗 Connect

- GitHub: [@heyrajaman](https://github.com/heyrajaman)
- Portfolio: [Coming Soon]
