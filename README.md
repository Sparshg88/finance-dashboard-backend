# 💰 Finance Dashboard Backend

## 📌 Overview

This project is a backend system for a **Finance Dashboard Application** that allows users to manage financial records, view analytics, and access data based on their roles.

The backend is designed with a focus on **clean architecture, role-based access control, and scalable API design**.

---

## 🚀 Features

### 🔐 Authentication & Authorization

* User registration and login
* JWT-based authentication
* Role-based access control (RBAC)

  * **Admin** → Full access
  * **Analyst** → Read + insights
  * **Viewer** → Read-only access

---

### 💰 Financial Records Management

* Create, read, update, delete (CRUD) records
* Fields include:

  * Amount
  * Type (income/expense)
  * Category
  * Date
  * Notes
* Filtering support (by type, category, date)

---

### 📊 Dashboard Analytics

* Total Income
* Total Expenses
* Net Balance
* Category-wise summary
* Recent transactions

---

### 👥 User Management

* Create and manage users
* Assign roles
* Activate/Deactivate users

---

### ✅ Validation & Error Handling

* Input validation for APIs
* Proper error messages and status codes
* Centralized error handling

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Authentication:** JWT
* **Other:** dotenv, cors

---

## 📂 Project Structure

```
src/
 ├── config/
 │    └── db.js
 ├── controllers/
 ├── middleware/
 ├── models/
 ├── routes/
 └── app.js
server.js
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/Sparshg88/finance-dashboard-backend.git
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run Server

```
npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

## 🔗 API Endpoints

### 🔐 Auth

* `POST /api/auth/register`
* `POST /api/auth/login`

### 💰 Records

* `POST /api/records`
* `GET /api/records`
* `PUT /api/records/:id`
* `DELETE /api/records/:id`

### 📊 Dashboard

* `GET /api/dashboard`

### 👥 Users

* `GET /api/users`
* `PUT /api/users/:id`

---

## 🔑 Authentication

Protected routes require:

```
Authorization: Bearer <token>
```

---

## 🧪 Testing

APIs can be tested using **Postman**.

Steps:

1. Register a user
2. Login to get token
3. Use token in headers
4. Test all endpoints

---


## ✨ Optional Enhancements

* JWT authentication implemented
* Filtering support added
* Clean folder structure
* Scalable architecture





