# 🏠 WanderNest

**WanderNest** is a full-stack vacation rental platform that enables users to browse, list, and review accommodations worldwide. Built with a focus on scalability and security, it mimics core functionalities of platforms like Airbnb, providing a seamless experience for travelers and hosts alike.

🌐 **Live Demo:** [WanderNest on Render](https://wandernest-x5q2.onrender.com)

---

## ✨ Features

* **Secure Authentication:** Robust user signup and login system implemented via **Passport.js** with session and cookie management.
* **Dynamic Listings:** Comprehensive CRUD functionality allowing users to create, view, update, and delete property listings.
* **Cloud Image Management:** Seamless image uploads and hosting integrated with **Cloudinary**.
* **Persistent Sessions:** Reliable user sessions stored using **Mongo Session Storage** to maintain login states across browser restarts.
* **Responsive Design:** A clean, user-friendly interface built with **Bootstrap 5** and **EJS** for dynamic content rendering.
* **Review System:** Interactive platform for users to leave feedback and star ratings on listings.

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Frontend:** EJS (Embedded JavaScript), Bootstrap 5, HTML5, CSS3
* **Database:** MongoDB Atlas (Cloud Database)
* **Authentication:** Passport.js
* **Session Management:** `connect-mongo`
* **Cloud Storage:** Cloudinary

---

## 🚀 Getting Started

### Prerequisites
* Node.js installed
* MongoDB Atlas Account
* Cloudinary API Credentials

### Installation & Local Setup

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/Sangamitra2003/WanderNest.git](https://github.com/Sangamitra2003/WanderNest.git)
    cd WanderNest
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Configuration:**
    Create a `.env` file in the root directory and add:
    ```env
    ATLASDB_URL=your_mongodb_atlas_connection_string
    SECRET=your_session_secret
    CLOUD_NAME=your_cloudinary_name
    CLOUD_API_KEY=your_cloudinary_key
    CLOUD_API_SECRET=your_cloudinary_secret
    ```

4.  **Run the Application:**
    ```bash
    node app.js
    ```
    Visit `http://localhost:8080` in your browser.

---

## 📂 Project Highlights

* **Scalable Architecture:** Optimized database queries to enhance application performance and responsiveness.
* **Security First:** Implemented secure session handling and password hashing to ensure data integrity.
* **Deployment:** Successfully deployed on **Render** for public access.

---

## 👤 Author

**Sangamitra Samal** 

📧 [samalsanghamitra3@gmail.com](mailto:samalsanghamitra3@gmail.com)  
🔗 [LinkedIn](https://linkedin.com/in/sanghamitra-samal-56836b236)  
💻 [GitHub](https://github.com/Sangamitra2003)
