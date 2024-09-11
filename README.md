# 📊 Community Stock Discussion Platform

A full-stack community platform where users can discuss various stocks in the market. Built with the MERN stack and featuring real-time updates via Socket.io.

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## 🌟 Features

- 🔐 **User Authentication**: Secure JWT-based authentication with profile management
- 📝 **Stock Post Management**: Create, update, delete, and view posts with stock symbols, titles, descriptions, and tags
- 💬 **Commenting System**: Engage in discussions through a robust commenting system
- 👍 **Like System**: Express appreciation with real-time like updates
- 📄 **Pagination**: Efficiently fetch posts with pagination, filtering, and sorting
- ⚡ **Real-time Updates**: Receive instant notifications for new comments and likes using Socket.io

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Real-time Communication**: Socket.io
- **Authentication**: JWT (JSON Web Tokens)
- **API Testing**: Postman

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- MongoDB

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies
4. Create a `.env` file in the root directory and add the following:
   dbURL=your_mongodb_connection_string
   PORT=8000
  JWT_SECRET=your_jwt_secret
5. Start the server : npm start


## 📚 API Documentation

### User Authentication and Management

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/register` | POST | Register a new user |
| `/api/auth/login` | POST | User login |
| `/api/user/profile/:userId` | GET | Get user profile |
| `/api/user/profile` | PUT | Update user profile |

### Stock Posts Management

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/posts` | POST | Create a new stock post |
| `/api/posts` | GET | Get all stock posts (with optional filters) |
| `/api/posts/:postId` | GET | Get a single stock post |
| `/api/posts/:postId` | DELETE | Delete a stock post |

### Comments and Likes

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/posts/:postId/comments` | POST | Add a comment to a post |
| `/api/posts/:postId/comments/:commentId` | DELETE | Delete a comment |
| `/api/posts/:postId/like` | POST | Like a post |
| `/api/posts/:postId/like` | DELETE | Unlike a post |

## 🔌 Real-time Updates

Connect to the WebSocket server to receive real-time updates on new comments and likes for specific posts.

## 🧪 Testing

We recommend using Jest or Mocha for writing and running tests. Ensure comprehensive test coverage for API endpoints, real-time functionality, and other critical components.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/rahulsonu1/stock-api/issues).



---

Made with ❤️ by [Rahul Kumar]
