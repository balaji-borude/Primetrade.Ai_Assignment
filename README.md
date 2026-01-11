# Scalable REST API with Authentication & Role-Based Access

This project is a complete implementation of the **Backend Developer (Intern) – Project Assignment**.  
It delivers a secure, scalable REST API with authentication, role-based access control, CRUD operations, and a basic frontend to test all APIs.

---

## 🚀 Project Overview

This system provides:

- Secure user authentication using JWT  
- Role-based access control (User & Admin)  
- CRUD APIs for a secondary entity (Tasks/Notes/Products)  
- API versioning, validation, and centralized error handling  
- Database integration  
- API documentation using Postman  
- Basic frontend UI to test all APIs  
- Scalable and modular project structure  

---

## 🧠 Tech Stack

### Backend
- Node.js  
- Express.js  
- MongoDB / PostgreSQL / MySQL  
- JWT Authentication  
- Bcrypt Password Hashing  
- Express Validator  

### Frontend
- React.js / Next.js / Vanilla JS  
- Axios  
- React Router  

### Tools
- Postman  
- GitHub  

backend/
├── controllers/
├── routes/
├── models/
├── middlewares/
├── config/
├── utils/
└── server.js

frontend/
├── src/
│ ├── pages/
│ ├── components/
│ ├── api/
│ └── App.jsx


---

## 🔐 Core Features

### Authentication
- User registration with hashed passwords  
- Login with JWT token  
- Protected routes using middleware  

### Role-Based Access
- Roles: User, Admin  
- Admin-only endpoints  
- Role-check middleware  

### CRUD APIs
- Create  
- Read  
- Update  
- Delete  

### API Standards
- REST architecture  
- Proper HTTP status codes  
- Centralized error handling  
- Input validation  
- API versioning: `/api/v1`  

---

## 🖥️ Frontend Features

- Register & Login  
- JWT-protected dashboard  
- CRUD operations UI  
- Error & success messages  

---

## ⚙️ Setup Instructions


---

## 🔐 Core Features

### Authentication
- User registration with hashed passwords  
- Login with JWT token  
- Protected routes using middleware  

### Role-Based Access
- Roles: User, Admin  
- Admin-only endpoints  
- Role-check middleware  

### CRUD APIs
- Create  
- Read  
- Update  
- Delete  

### API Standards
- REST architecture  
- Proper HTTP status codes  
- Centralized error handling  
- Input validation  
- API versioning: `/api/v1`  

---

## 🖥️ Frontend Features

- Register & Login  
- JWT-protected dashboard  
- CRUD operations UI  
- Error & success messages  

---

## ⚙️ Setup Instructions

### Clone Repository

```bash
```bash
git clone https://github.com/balaji-borude/Primetrade.Ai_Assignment
cd project-folder

# Backend Setup
cd backend
npm install

PORT=5000
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key

npm run dev
# http://localhost:5000

# Frontend Setup
cd frontend
npm install
npm run dev
# http://localhost:5173

# Exit bash
exit




You just want to add a short note in your README after the bash commands explaining how to exit. Add this section.


