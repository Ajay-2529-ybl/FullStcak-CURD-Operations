const express = require("express");
const cors = require("cors");
const path = require("path");
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname)));

// Root route to serve the HTML file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Include routes
require("./routes/product.routes.js")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});