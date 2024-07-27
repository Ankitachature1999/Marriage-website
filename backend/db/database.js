const mysql = require('mysql2/promise');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // Replace with your database password
  database: 'matrimony_db'  // Replace with your database name
});

// Export the pool object
module.exports = pool;
