# 🎨 MERN Team Collaboration Tool - Frontend (Client)

A modern and scalable frontend built with **React.js, Redux Toolkit, and Socket.IO Client** for real-time team collaboration.

---

## 📌 Overview

This frontend provides a powerful UI similar to Jira + Slack, enabling:

* 📋 Task & Board Management
* 💬 Real-time Chat
* 🔐 Authentication & Authorization
* ⚡ Fast and responsive UI

---

## 🏗️ Architecture

* **Component-Based Architecture (React)**
* **State Management with Redux Toolkit**
* **Feature-based Folder Structure**
* **Custom Hooks for reusable logic**
* **API Layer using Axios**
* **Socket.IO Client for real-time updates**

---

## 📁 Project Structure

```id="c8v4tf"
client/
├── public/                    # Static files
│
├── src/
│   ├── app/                  # Redux store setup
│   │   ├── store.js
│
│   ├── assets/               # Images, icons, fonts
│
│   ├── components/           # Reusable UI components
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Modal.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │
│   │   ├── board/
│   │   │   ├── Board.jsx
│   │   │   ├── Column.jsx
│   │   │   ├── TaskCard.jsx
│   │   │
│   │   ├── chat/
│   │   │   ├── ChatWindow.jsx
│   │   │   ├── Message.jsx
│
│   ├── features/             # Redux slices (feature-based)
│   │   ├── auth/
│   │   │   ├── authSlice.js
│   │   │   ├── authAPI.js
│   │   │
│   │   ├── tasks/
│   │   │   ├── taskSlice.js
│   │   │   ├── taskAPI.js
│   │   │
│   │   ├── chat/
│   │   │   ├── chatSlice.js
│   │   │   ├── chatAPI.js
│
│   ├── pages/                # Route-level pages
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   ├── BoardPage.jsx
│
│   ├── routes/               # Routing configuration
│   │   ├── AppRoutes.jsx
│   │   ├── PrivateRoute.jsx
│
│   ├── services/             # API configuration (Axios)
│   │   ├── api.js
│
│   ├── hooks/                # Custom React hooks
│   │   ├── useAuth.js
│   │   ├── useSocket.js
│
│   ├── utils/                # Utility functions
│   │   ├── constants.js
│   │   ├── helpers.js
│
│   ├── styles/               # Global styles
│   │   ├── index.css
│
│   ├── App.jsx               # Root component
│   ├── main.jsx              # Entry point
│
├── package.json
```

---

## ⚙️ Tech Stack

| Layer      | Technology                |
| ---------- | ------------------------- |
| Frontend   | React.js                  |
| State Mgmt | Redux Toolkit             |
| Routing    | React Router              |
| API Calls  | Axios                     |
| Realtime   | Socket.IO Client          |
| Styling    | CSS / Tailwind (optional) |

---

## 🚀 Features

* 🔐 Authentication (Login/Register)
* 🧑‍🤝‍🧑 Role-based UI rendering
* 📋 Kanban Board (Drag & Drop ready)
* 💬 Real-time Chat System
* ⚡ Fast state updates using Redux Toolkit
* 🔄 API integration with backend
* 🎯 Clean and reusable component structure

---

## 🔧 Installation & Setup

### 1️⃣ Clone Repository

```bash id="v7l0ci"
git clone https://github.com/your-username/mern-team-collaboration-tool.git
cd mern-team-collaboration-tool/client
```

---

### 2️⃣ Install Dependencies

```bash id="knnzt6"
npm install
```

---

### 3️⃣ Environment Variables

Create a `.env` file:

```env id="g4r7pg"
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

---

### 4️⃣ Run Development Server

```bash id="9d5u0b"
npm run dev
```

---

## 🔗 Routing

| Route        | Description     |
| ------------ | --------------- |
| `/login`     | Login page      |
| `/register`  | Register page   |
| `/dashboard` | Main dashboard  |
| `/board/:id` | Task board view |

---

## 🔐 Authentication Flow

1. User logs in → receives JWT
2. Token stored (localStorage / Redux)
3. Attached to API requests via Axios
4. Protected routes handled via `PrivateRoute`

---

## 🔌 Socket Integration

Custom hook: `useSocket.js`

Features:

* Join chat rooms
* Send/receive messages
* Live updates

---

## 🧪 Scripts

```json id="w9ghjz"
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

---

## 📦 Future Enhancements

* ✅ Drag & Drop (React DnD / DnD Kit)
* ✅ Notifications system
* ✅ Dark mode
* ✅ PWA support
* ✅ Performance optimization

---

## 🤝 Contribution

1. Fork the repo
2. Create a feature branch
3. Commit changes
4. Push to branch
5. Open Pull Request

---

## 📜 License

MIT License

---

## 👨‍💻 Author

**Hitarth**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
