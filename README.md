# 🔐 Auth API Backend (Node.js + Express + MongoDB)

A backend server for handling user authentication, email verification, and secure session management using **JWT** stored in **HTTP-only cookies**. Built with **Node.js**, **Express**, and **MongoDB**.

---

## 📦 Tech Stack

- **Node.js**
- **Express**
- **MongoDB (Mongoose)**
- **JWT (JSON Web Tokens)**
- **bcryptjs** for password hashing
- **cookie-parser** for managing cookies
- **nodemailer** for sending verification emails
- **dotenv** for managing environment variables
- **cors** for cross-origin requests

---

## 🚀 Features

- User registration with hashed passwords
- Email verification using unique verification links
- Login with JWT issued on success
- JWT token stored in secure, HTTP-only cookies
- Middleware for protected routes
- CORS support for frontend/backend separation

---

## ⚙️ Getting Started

### 1. Clone the repository
Use `git clone https://github.com/saurabh-uchil/Login-Signup-With-JWT-Backend-Using-Node.git` to clone the repo.

### 2. Install dependencies
npm install

### 3. Create .env file
PORT=3000  
JWT_SECRET=your_jwt_secret  
MONGO_USERNAME=your_mongo_username  
MONGO_PASSWORD=your_mongo_password  
TEST_EMAIL=your_email@example.com  
APP_PASSWORD=your_email_app_password  

### 4. Start the server
npm start

### 5. 🔒 Authentication Flow
Register user with /register

Email is sent with link /verify/:id

User logs in via /login

JWT is stored in cookie

Protected routes verify token from req.cookies.myToken


