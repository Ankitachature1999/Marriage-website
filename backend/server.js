



// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const path = require('path');

// const app = express();
// const port = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// // Serve static files from 'uploads' directory
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Import routes
// const registerRoute = require('./routes/register');

// // Use routes
// app.use('/api', registerRoute);

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });



const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // To parse JSON bodies

// Database connection
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // Replace with your database password
  database: 'matrimony_db' // Replace with your database name
});

// Route to get all profiles
app.get('/api/profiles', async (req, res) => {
  try {
    const [profiles] = await pool.query('SELECT * FROM users');
    res.json(profiles);
  } catch (error) {
    console.error('Error fetching profiles:', error);
    res.status(500).json({ error: 'An error occurred while fetching profiles.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
