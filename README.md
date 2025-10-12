# 🧠 AI Resume Match — ResumeMatchAI

**Live Demo:** [Click Here](https://resumematchai-9qpb.onrender.com)

---

## 📘 Overview  
**AI Resume Match** is a responsive web application that helps users **analyze how well their resumes match a given job description**.  
It uses **Cohere AI** for natural language understanding, **MongoDB** for data storage, and **Firebase Authentication** for secure login.  
Users can upload resumes (PDF), receive a **match score (0–100)**, and get **AI-generated feedback** .

---

## 🚀 Features  
✅ Upload your resume (PDF format)  
✅ Compare with any job description  
✅ AI-generated match score and feedback  
✅ View previous analyses  
✅ Admin view for all user submissions  
✅ Firebase Authentication for login

---

## 🧩 Tech Stack  

**Frontend:**  
- React.js (Vite)  
- Axios
- Firebase Authentication  

**Backend:**  
- Node.js  
- Express.js  
- MongoDB
- Multer (for uploads) 
- Cohere AI API  

**Deployment:**  
- Render
---

## ⚙️ Setup Instructions  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/vjy-07/ResumeMatchAI.git
cd resumematchai
```
### 2️⃣ Backend Setup
```
cd backend
npm install

```
Create a .env file in the backend folder and add:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
COHERE_API_KEY=your_cohere_api_key
```

Then start the backend server:
```
npm start
```

### 3️⃣ Frontend Setup
```
cd ../client
npm install
```

Create a .env file in the frontend folder and add:
```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=
```

Run the frontend:
```
npm run dev
```

### 📂 Folder Structure
```
ResumeMatchAI/
│
├── backend/
│   ├── Controllers/
│   ├── Models/
│   ├── Routes/
│   ├── uploads/
│   ├── server.js
│   └── .env
│
├── client/
    ├── src/
    ├── public/
    ├── .env
    └── vite.config.js
```
🏁 Conclusion

ResumeMatchAI transforms how job seekers evaluate their resumes.
It’s a smart, AI-powered tool that provides instant insights, empowering users to optimize their resumes and increase interview success.


