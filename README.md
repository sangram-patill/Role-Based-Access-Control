# RBAC (Role-Based Access Control) Application
This project implements a Role-Based Access Control (RBAC) system with a backend API and a React frontend. It demonstrates secure authentication, authorization, and role management for users, including roles such as Admin, User, and Moderator.

**Features**
1. Authentication:
   a.Secure user registration and login using JWT.
   b.Password hashing for enhanced security.
2. Authorization:
   a.Role-based permissions for accessing specific resources.
   b.Protected routes based on user roles.
3. Role Management:
   a.Roles include Admin, User, and Moderator.
   b.Role-based messages displayed on the dashboard.
4. Frontend:
   a.Built using React with Tailwind CSS for styling.
   b.User-friendly interface for login, registration, and navigation.
5. Backend:
   a.Node.js with Express for RESTful APIs.
   b.MongoDB for storing user data.

**Technologies Used**

  **Frontend**
      a.React
      b.React Router
      c.Axios
      d.Tailwind CSS
  
  **Backend**
      a.Node.js
      b.Express.js
      c.MongoDB
      d.bcrypt for password hashing
      e.jsonwebtoken (JWT) for authentication

**Installation and Setup**
1. Clone the repository
   a.git clone git+https://github.com/sangram-patill/RBAC-Assignment.git
   b.cd RBAC-Assignment
2. Backend Setup
   a. cd backend
   b. npm install
   c. create .env
        PORT=5000
        MONGO_URI=Your MongoDB Connection URI
        JWT_SECRET=Your JWT Secret
   d. npm start
   e. The backend will run on http://localhost:5000.
3. Frontend Setup
   a. cd frontend
   b. npm install
   c. npm start
   d. The frontend will run on http://localhost:3000.

**API Endpoints**
1. Authentication
   a.POST /api/users/register - Register a new user.
   b.POST /api/users/login - Authenticate user and generate a JWT token.
2. Protected Routes
   a.GET /api/protected - Access restricted data based on user role.

Contributors
Developer: Sangram Patil 
Visit My Website: https://sangram-patil.vercel.app/
