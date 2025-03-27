# FullStcak-CURD-Operations
A web application built using Node.js, HTML, JavaScript, React.js, and MySQL, performing CRUD (Create, Read, Update, Delete) operations.

Table of Contents

Overview

Features

Tech Stack

Installation

Database Schema

API Endpoints

Usage

Contributing

License

Overview

This project is a full-stack web application that demonstrates CRUD operations using Node.js as the backend, React.js for the frontend, and MySQL as the database.

Features

User authentication

CRUD operations on data

Responsive UI with React.js

REST API integration

MySQL database management

Tech Stack

Frontend: React.js, HTML, CSS, JavaScript

Backend: Node.js, Express.js

Database: MySQL

Other Tools: npm, Postman (for API testing)

Installation

Prerequisites

Ensure you have the following installed:

Node.js

MySQL

Steps to Run the Project

Clone the repository:

git clone https://github.com/your-username/repository-name.git
cd repository-name

Install dependencies:

npm install

Set up the MySQL database:

Create a database.

Import the provided SQL file (if available) or create tables manually.

Update the database configuration in config.js.

Start the backend server:

node server.js

Start the frontend:

cd client
npm start

Database Schema

Example:

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

API Endpoints

Method

Endpoint

Description

GET

/users

Get all users

POST

/users

Add a new user

PUT

/users/:id

Update user details

DELETE

/users/:id

Delete a user

Usage

Register/Login to access the application.

Perform CRUD operations through the UI.

Use Postman to test API endpoints.
