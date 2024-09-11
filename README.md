Community Stock Discussion Platform
A full-stack community platform where users can discuss various stocks in the market. The backend is built using the MERN stack (MongoDB, Express.js, Node.js) with real-time updates via Socket.io. This README provides all the necessary information to get started with and use the application.

Project Overview
This application allows users to:

Register and log in using JWT-based authentication.
Create, view, update, and delete stock-related posts.
Comment on and like posts.
Filter and sort posts by stock symbol, tags, and other criteria.
Receive real-time updates on new comments and likes.
Features
User Authentication: Secure JWT-based authentication with profile management.
Stock Post Management: Create, update, delete, and view posts with stock symbols, titles, descriptions, and optional tags.
Commenting System: Users can comment on posts, and comments are linked to both posts and users.
Like System: Users can like and unlike posts with real-time updates on likes.
Pagination: Fetch posts with pagination, filtering, and sorting.
Real-time Updates: Get real-time notifications for new comments and likes using Socket.io.
Tech Stack
Backend: Node.js, Express.js
Database: MongoDB
Frontend: (Not included in this README, but typically React or another framework)
Real-time Communication: Socket.io
Authentication: JWT (JSON Web Tokens)
API Testing: Postman 

Installation
1) Clone the repository
2) Navigate to the project directory
3) Install dependencies
4) Create a .env file
5) Start the server: npm start

Configuration
Update the .env file with your MongoDB connection string and other configurations
dbURL=your_mongodb_connection_string
PORT=8000
JWT_SECRET=your_jwt_secret


API Documentation
User Authentication and Management
User Registration

POST /api/auth/register
Request Body: { username, email, password }
Response: { success: true, message: 'User registered successfully', userId }
User Login

POST /api/auth/login
Request Body: { email, password }
Response: { token, user: { id, username, email } }
Get User Profile

GET /api/user/profile/:userId
Headers: { Authorization: Bearer <token> }
Response: { id, username, bio, profilePicture }
Update User Profile

PUT /api/user/profile
Headers: { Authorization: Bearer <token> }
Request Body: { username, bio, profilePicture }
Response: { success: true, message: 'Profile updated' }
Stock Posts Management
Create a Stock Post

POST /api/posts
Headers: { Authorization: Bearer <token> }
Request Body: { stockSymbol, title, description, tags }
Response: { success: true, postId, message: 'Post created successfully' }
Get All Stock Posts

GET /api/posts
Query Parameters:
stockSymbol (optional)
tags (optional)
sortBy (date or likes, optional)
page (optional, default: 1)
limit (optional, default: 10)

Get a Single Stock Post

GET /api/posts/:postId
Response: { postId, stockSymbol, title, description, likesCount, comments: [ { commentId, userId, comment, createdAt } ] }
Delete a Stock Post

DELETE /api/posts/:postId
Headers: { Authorization: Bearer <token> }
Response: { success: true, message: 'Post deleted successfully' }
Comments Management
Add a Comment to a Post

POST /api/posts/:postId/comments
Headers: { Authorization: Bearer <token> }
Request Body: { comment }
Response: { success: true, commentId, message: 'Comment added successfully' }
Delete a Comment

DELETE /api/posts/:postId/comments/:commentId
Headers: { Authorization: Bearer <token> }
Response: { success: true, message: 'Comment deleted successfully' }
Like System
Like a Post

POST /api/posts/:postId/like
Headers: { Authorization: Bearer <token> }
Response: { success: true, message: 'Post liked' }
Unlike a Post

DELETE /api/posts/:postId/like
Headers: { Authorization: Bearer <token> }
Response: { success: true, message: 'Post unliked' }


Real-time Updates (Socket.io)
WebSocket Endpoint
Subscribe to Post Updates: Connect to the WebSocket server and join a room for a specific post to receive real-time updates on new comments and likes.
Testing
You can write tests for your application using Jest or Mocha. Ensure that you have appropriate test cases for API endpoints, real-time functionality, 
and any other critical parts of your application.


