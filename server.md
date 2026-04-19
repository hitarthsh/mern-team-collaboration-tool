# 🧠 MERN Team Collaboration Tool - Backend

A scalable and production-ready backend built with **Node.js, Express, MongoDB, and Socket.IO** for managing teams, tasks, and real-time communication.

---

## 📌 Overview

This backend powers a team collaboration platform similar to Jira + Slack.
It provides APIs for authentication, task management, and chat, along with real-time messaging support.

---

## 🏗️ Architecture

* **MVC Pattern** (Model - Controller - Route)
* **REST API Design**
* **JWT Authentication**
* **Socket.IO for real-time communication**
* **Modular & Scalable Folder Structure**

---

## 📁 Project Structure

```
server/
├── config/
│   ├── db.js                  # MongoDB connection
│   ├── env.js                 # Environment configuration
│
├── controllers/              # Business logic
│   ├── authController.js
│   ├── taskController.js
│   ├── chatController.js
│
├── models/                   # Database schemas
│   ├── User.js
│   ├── Task.js
│   ├── Message.js
│
├── routes/                   # API routes
│   ├── authRoutes.js
│   ├── taskRoutes.js
│   ├── chatRoutes.js
│
├── middleware/               # Custom middlewares
│   ├── authMiddleware.js
│   ├── errorMiddleware.js
│
├── sockets/                  # Real-time logic
│   ├── chatSocket.js
│
├── utils/                    # Helper functions
│   ├── generateToken.js
│   ├── validators.js
│
├── constants/
│   ├── roles.js
│
├── app.js                    # Express app setup
├── server.js                 # Entry point
├── package.json
```

---

## ⚙️ Tech Stack

| Layer      | Technology                     |
| ---------- | ------------------------------ |
| Backend    | Node.js, Express.js            |
| Database   | MongoDB (Mongoose)             |
| Auth       | JWT (JSON Web Token)           |
| Realtime   | Socket.IO                      |
| Validation | Custom Validators / Middleware |

---

## 🚀 Features

* 🔐 User Authentication (Register/Login)
* 🧑‍🤝‍🧑 Role-Based Access Control (RBAC)
* 📋 Task Management (Create, Update, Delete, Assign)
* 💬 Real-time Chat System
* ⚡ Socket-based live updates
* 🛡️ Secure API with middleware
* ❗ Centralized Error Handling
* 📦 Clean and scalable architecture

---

## 🔧 Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/mern-team-collaboration-tool.git
cd mern-team-collaboration-tool/server
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
NODE_ENV=development
```

---

### 4️⃣ Run Server

#### Development mode

```bash
npm run dev
```

#### Production mode

```bash
npm start
```

---

## 🌐 API Endpoints

### 🔐 Auth Routes

```
POST   /api/auth/register     # Register user
POST   /api/auth/login        # Login user
GET    /api/auth/profile      # Get user profile
```

---

### 📋 Task Routes

```
GET    /api/tasks             # Get all tasks
POST   /api/tasks             # Create task
PUT    /api/tasks/:id         # Update task
DELETE /api/tasks/:id         # Delete task
```

---

### 💬 Chat Routes

```
GET    /api/chat/:roomId      # Get messages
POST   /api/chat/send         # Send message
```

---

## 🔌 Socket.IO Events

| Event Name       | Description     |
| ---------------- | --------------- |
| `joinRoom`       | Join chat room  |
| `sendMessage`    | Send message    |
| `receiveMessage` | Receive message |
| `disconnect`     | User disconnect |

---

## 🔐 Authentication Flow

1. User logs in → receives JWT token
2. Token sent in headers:

   ```
   Authorization: Bearer <token>
   ```
3. Middleware verifies token
4. Access granted to protected routes

---

## 🛡️ Middleware

* **authMiddleware**

  * Protects routes
  * Verifies JWT
* **errorMiddleware**

  * Handles global errors
  * Sends structured responses

---

## 🧪 Scripts

```json
"scripts": {
  "dev": "nodemon server.js",
  "start": "node server.js"
}
```

---

## 📦 Future Improvements

* ✅ Redis caching
* ✅ File uploads (AWS S3 / Cloudinary)
* ✅ Notifications system
* ✅ Activity logs
* ✅ Microservices architecture

---

## 📡 Base URL

```
http://localhost:5000/api
```

---

## 🤝 Contribution

1. Fork the repo
2. Create a feature branch
3. Commit changes
4. Push to branch
5. Open Pull Request

---

## 📜 License

This project is licensed under the **MIT License**

---

## 👨‍💻 Author

**Hitarth**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
