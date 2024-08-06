// const express = require('express');
// const mysql = require('mysql2/promise');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors()); // Enable CORS for all routes
// app.use(express.json()); // To parse JSON bodies

// // Database connection
// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: '', // Replace with your database password
//   database: 'matrimony_db' // Replace with your database name
// });

// // Route to get all profiles
// app.get('/api/profiles', async (req, res) => {
//   try {
//     const [profiles] = await pool.query('SELECT * FROM users');
//     res.json(profiles);
//   } catch (error) {
//     console.error('Error fetching profiles:', error);
//     res.status(500).json({ error: 'An error occurred while fetching profiles.' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });