// import mysql2 from mysql2/Promise;
// import dotenv from dotenv;
const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    // host: process.env.DB_HOST,
    // user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME,
    // port: 3306  // MySQL default port
    host: 'localhost',    // ✅ Correct hostname
    user: 'root',         // Your MySQL username
    password: 'ajay@2925',         // Your MySQL password (if any)
    database: 'your_database',
    port: 3306
});

connection.connect(error => {
    if (error) {
        console.error('Error connecting to the database:', error);
        return;
    }
    console.log("Successfully connected to the database.");
});

module.exports = connection;