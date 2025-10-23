const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/dbConn');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB-connection
connectDB();


mongoose.connection.once('open', () => {
  console.log('✅ MongoDB connection is open');
  app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
});

