const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require('cors');


dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000', // React app's origin
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Import routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// Start server 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
