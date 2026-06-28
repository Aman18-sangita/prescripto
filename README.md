
# 🏥 Prescripto – Doctor Appointment Booking System

A full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** web application that simplifies the process of booking and managing doctor appointments. The platform provides separate dashboards for **Patients, Doctors, and Administrators**, allowing efficient appointment scheduling, profile management, and healthcare administration.

---

# 🌐 Live Demo

### 👤 User Frontend

**[https://prescripto-two-xi.vercel.app/](https://prescripto-two-xi.vercel.app/)**

### ⚙️ Backend API

**[https://prescripto-i8w1.onrender.com](https://prescripto-i8w1.onrender.com)**

---

# 📖 Project Overview

Prescripto is an online doctor appointment booking platform designed to eliminate the traditional process of booking appointments manually. Patients can browse doctors by specialty, book appointments, and manage their bookings online.

Doctors can manage their appointments, update their profiles, and mark appointments as completed or cancelled. Administrators can manage doctors, monitor appointments, and oversee the entire system from an admin dashboard.

The application follows a modern client-server architecture using the MERN stack with secure JWT authentication and cloud image storage.

---

# 💡 Concept

The primary objective of Prescripto is to digitize the healthcare appointment process by providing:

* Online appointment booking
* Doctor profile management
* Patient management
* Admin control panel
* Secure authentication
* Responsive user interface

The project demonstrates a real-world implementation of a hospital appointment management system using modern web technologies.

---

# 🚀 Tech Stack

## Frontend

* React.js
* React Router DOM
* Tailwind CSS
* Axios
* React Toastify

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt.js
* Multer

## Cloud Services

* Cloudinary (Image Upload)
* Render (Backend Deployment)
* Vercel (Frontend Deployment)

---

# ✨ Features

## 👤 User Panel

* User Registration & Login
* Browse Doctors
* Filter Doctors by Specialty
* Book Appointments
* View My Appointments
* Cancel Appointments
* Responsive Design

---

## 👨‍⚕️ Doctor Panel

* Secure Doctor Login
* Dashboard
* View All Appointments
* Mark Appointment as Completed
* Cancel Appointment
* Update Profile
* Update Consultation Fees
* Manage Availability

---

## 👨‍💼 Admin Panel

* Secure Admin Login
* Dashboard Analytics
* Add New Doctors
* View Doctor List
* Change Doctor Availability
* Manage Entire Appointment System

---

## 🔐 Authentication & Security

* JWT Authentication
* Password Encryption using bcrypt
* Protected Routes
* Role-based Access Control

---

## 📱 Responsive UI

* Mobile Friendly
* Tablet Friendly
* Desktop Friendly
* Clean and Modern Interface

---

# ⚙️ How It Works

### Patient

1. Register/Login
2. Browse Doctors
3. Select Doctor
4. Book Appointment
5. View Appointment History
6. Cancel Appointment (if needed)

---

### Doctor

1. Login
2. View Dashboard
3. Check Upcoming Appointments
4. Complete or Cancel Appointment
5. Update Profile Information

---

### Admin

1. Login
2. Add Doctors
3. Monitor Dashboard
4. Manage Doctors
5. Manage Appointments

---

# 📁 Project Structure

```
Prescripto/
│
├── frontend/              # User Frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── admin/                 # Admin & Doctor Dashboard
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 🖥️ Running Locally

## 1. Clone Repository

```bash
git clone https://github.com/your-username/prescripto.git
```

---

## 2. Navigate to Project

```bash
cd prescripto
```

---

## 3. Install Dependencies

### Backend

```bash
cd backend
npm install
```

### User Frontend

```bash
cd frontend
npm install
```

### Admin Panel

```bash
cd admin
npm install
```

---

## 4. Start Backend

```bash
cd backend
npm run server
```

---

## 5. Start User Frontend

```bash
cd frontend
npm run dev
```

---

## 6. Start Admin Panel

```bash
cd admin
npm run dev
```

---

# 🔑 Environment Variables

## Backend (.env)

```env
PORT=4000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_NAME=your_cloudinary_name

CLOUDINARY_API_KEY=your_cloudinary_api_key

CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key

ADMIN_EMAIL=your_admin_email

ADMIN_PASSWORD=your_admin_password
```

---

## Frontend (.env)

```env
VITE_BACKEND_URL=http://localhost:4000
```

---

## Admin (.env)

```env
VITE_BACKEND_URL=http://localhost:4000
```

---

# 📈 Future Improvements

* Online Payment Integration (Stripe/Razorpay)
* Video Consultation
* Email Notifications
* SMS Appointment Reminders
* Doctor Ratings & Reviews
* Medical History Management
* Prescription Upload
* Appointment Rescheduling
* Multi-language Support
* Dark Mode
* AI-powered Doctor Recommendation
* Real-time Notifications

---

# 🎯 Conclusion

Prescripto is a complete MERN Stack Doctor Appointment Booking System that provides a seamless experience for patients, doctors, and administrators. It demonstrates full-stack development concepts including authentication, REST APIs, database management, cloud storage, responsive UI design, and deployment using Render and Vercel.

This project showcases practical implementation of modern web development practices and serves as an excellent real-world portfolio project.

---

# 👨‍💻 Author

**Aman Jaiswal**

* MERN Stack Developer
* Passionate about Full Stack Web Development
* GitHub: [https://github.com/Aman18-sangita](https://github.com/Aman18-sangita)

⭐ If you found this project useful, don't forget to **Star** the repository!
