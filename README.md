# 🎓 University Management System

A responsive University Management System developed using **HTML, CSS, and JavaScript**. This project provides separate dashboards for **Admin, Faculty, and Students** with authentication, registration, and management features. The project stores data in the browser using **LocalStorage**, so no database is required.

---

# 📌 Features

### 👨‍💼 Admin
- Login as Admin
- View all users
- Manage students
- Manage faculty
- Manage courses
- Logout

### 👩‍🏫 Faculty
- Login as Faculty
- View profile
- View assigned subjects
- Grade students
- Mark attendance
- Logout

### 👨‍🎓 Student
- Login as Student
- View profile
- View attendance
- View grades
- Logout

### 🔐 Authentication
- Login
- Registration
- Role-based dashboard
- Session stored using LocalStorage

---

# 💻 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Browser LocalStorage

---

# 📂 Folder Structure

```
University-Management-System
│
├── index.html
├── admin.html
├── faculty.html
├── student.html
├── script.js
├── style.css
├── package.json
└── README.md
```

---

# 🚀 How to Run the Project

## Method 1 (Recommended)

1. Download or Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/University-Management-System.git
```

2. Open the project folder.

3. Open `index.html` in your browser.

OR

Use VS Code.

Install the **Live Server** extension.

Right click on `index.html`

Click

```
Open with Live Server
```

The project will start automatically.

---

# 🔑 Default Login Credentials

The project already contains demo users.

## 👨‍💼 Admin Login

Email

```
admin@example.com
```

Password

```
admin
```

Role

```
Admin
```

---

## 👩‍🏫 Faculty Login

Email

```
faculty@example.com
```

Password

```
faculty
```

Role

```
Faculty
```

---

## 👨‍🎓 Student Login

Email

```
student@example.com
```

Password

```
student
```

Role

```
Student
```

---

# 📝 Register a New User

If you don't want to use the default accounts:

1. Open the project.
2. Click **Register**.
3. Enter
   - Full Name
   - Email
   - Password
   - Select Role
4. Click **Register**.
5. Now go to Login.
6. Login using the newly created account.

---

# 📦 Data Storage

This project does **not** use any backend database.

All information is stored in your browser using **LocalStorage**.

If you clear your browser data or LocalStorage, all registered users and records will be removed.

---

# 🔄 Reset Demo Data

If login stops working because LocalStorage has changed:

1. Open Browser Developer Tools (`F12`).
2. Go to **Application** → **Local Storage**.
3. Delete the LocalStorage data for this project.
4. Refresh the page.

The default demo users will be recreated automatically.

---

# 📌 Modules

- Authentication
- Student Management
- Faculty Management
- Course Management
- Attendance Management
- Grade Management
- User Management

---

# 📈 Future Improvements

- MongoDB Integration
- Node.js Backend
- Express API
- JWT Authentication
- Password Encryption
- Profile Photo Upload
- File Upload
- Email Verification
- Admin Analytics Dashboard
- Responsive Mobile UI

---
## Link of Website
##### https://adityakushwaha64.github.io/Demo--CMS/

# 👨‍💻 Author

**Aditya Kushwaha**

B.Tech (Computer Science & Engineering)

Gandhi Institute For Technology (GIFT), Bhubaneswar

---

# 📜 License

This project is developed for educational and learning purposes.
