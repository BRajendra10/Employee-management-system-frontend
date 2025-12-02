# 📌 Employee Management System

A modern, full-stack employee management application built with **React, Vite, Tailwind CSS, Axios, Formik, Yup**, and a **Node.js + Express + MongoDB backend**.
The app allows you to **add, edit, delete, filter, and view employees** in a clean UI with both **List View** and **Board View**.

---

## 🚀 Features

### 🔹 **Employee CRUD**

* Add new employee
* Edit existing employee
* Delete employee
* View employee details in a modal

### 🔹 **Filtering & Search**

* Filter by **department**
* Filter by **position**
* Clean backend-based filtering (`/filter?department=IT&position=HR`)

### 🔹 **UI Views**

✔ **List View** — table layout
✔ **Board View** — department-based Kanban-style grouping

### 🔹 **Form Handling**

* **Formik** for form state
* **Yup** for validation
* Reusable Add/Edit form

### 🔹 **Tech Stack**

**Frontend**

* React 19
* Vite
* Tailwind CSS 4
* Axios instance
* React Router DOM
* Lucide Icons

**Backend**

* Node.js
* Express.js
* MongoDB

---

## 📁 Project Structure

```
src/
│
├── api/
│   ├── axiosConfig.js        # Axios instance with baseURL
│   └── employee.api.js       # All employee-related API functions
│
├── assets/                   # Images, icons, and static files
│
├── components/               # Reusable UI components
│   ├── AddEmployeeForm.jsx   # Form (Add/Edit) handled with Formik + Yup
│   ├── EmployeeList.jsx      # Table/List View UI
│   ├── Sidebar.jsx           # Sidebar navigation UI
│   └── ViewEmployeeModal.jsx # View employee details modal
│
├── pages/
│   └── Home.jsx              # Main page with List View + Board View switch
│
├── routes/
│   └── Navigation.jsx        # Routing setup using React Router
│
├── App.jsx                   # Root component
├── App.css                   # Global styles
├── main.jsx                  # React entry point
└── index.css                 # Tailwind + global styles
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/BRajendra10/employee-management-system.git
cd employee-management-system
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start Development Server

```bash
npm run dev
```

---

## 🔗 API Endpoints (Frontend Usage)

### **Get All Employees**

```js
api.get("/")
```

### **Add Employee**

```js
api.post("/add", employeeData)
```

### **Update Employee**

```js
api.put(`/update/${employeeId}`, employeeData)
```

### **Delete Employee**

```js
api.delete(`/delete/${employeeId}`)
```

### **Filter Employees**

```js
api.get("/filter", {
  params: { department, position }
})
```

---

## 🖼 UI Screens

### ✔ List View

* Detailed table
* Edit/Delete actions
* View modal

### ✔ Board View

* IT / HR / Marketing columns
* Count badges
* Card layout

---

## 🧪 Validation (Yup Schema)

* Name required
* Valid email
* Phone must be 10 digits
* Department required
* Position required
* Salary must be a positive number

---

## 🎨 UI Technologies

* Tailwind CSS
* Custom modals
* Icons from lucide-react
* Responsive layout

---

## Demo

![watch demo here](https://drive.google.com/file/d/1NAugXVnXb_OOI_zDh6PEuuCF3etBmXtI/view?usp=sharing)

---

## 🧑‍💻 Author

**Rajendra Behera**
Frontend Developer • React • JavaScript

* GitHub: [https://github.com/BRajendra10](https://github.com/BRajendra10)
* LinkedIn: [https://www.linkedin.com/in/behera-rajendra/](https://www.linkedin.com/in/behera-rajendra/)

---

## ⭐ Support

If you like this project, don’t forget to **star ⭐ the repository**!

