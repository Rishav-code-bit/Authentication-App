# Authentication-App

This is an authentication app that uses Node.js, MongoDB, Redis, and JWT for secure user authentication with token-based access. This app is structured to manage access tokens and refresh tokens to ensure secure session handling and optimized performance.

## Features

User Registration and Login: Register and authenticate users.

Token-based Authentication: Uses JWTs for secure access tokens and refresh tokens.

In-Memory Storage for Refresh Tokens: Redis is used for secure, fast storage and retrieval of refresh tokens.

Scalable Data Storage: MongoDB is used to store user information securely and flexibly.


## Tech Stack

[Node.js](https://nodejs.org/docs/latest/api/): Server-side JavaScript runtime for handling backend logic.

[MongoDB](https://www.mongodb.com/docs/): NoSQL database for persisting user data.

[Redis](https://redis.io/docs/latest/): In-memory data structure store for managing refresh tokens.

[JWT](https://jwt.io/introduction) (JSON Web Token): Provides token-based authentication for secure access.


# Getting Started

To get a local copy of the project up and running, follow these steps.

Prerequisites

Node.js (version 14 or higher)

MongoDB installed or a cloud instance (e.g., MongoDB Atlas)

Redis server running locally or remotely


## Environment Variables

Create a .env file in the root directory and add the following environment variables:

# Server Config
PORT=5000

# MongoDB Config
MONGO_URI=your_mongodb_connection_string

# Redis Config
REDIS_HOST=localhost
REDIS_PORT=6379

# JWT Config
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret

## Installation

1. Clone the repository:

git clone https://github.com/your-username/authentication-app.git
cd authentication-app


2. Install dependencies:

npm install


3. Run the app:

npm start



The app will run on http://localhost:5000 by default.

