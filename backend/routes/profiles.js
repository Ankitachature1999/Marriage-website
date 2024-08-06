// 


// backend/routes/profiles.js
const express = require('express');
const router = express.Router();
const db = require('../db/database'); // Assuming you have a database module

// Endpoint to get all profiles
router.get('/api/profile', async (req, res) => {
  try {
    const profiles = await db.query('SELECT * FROM users');
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching profiles.' });
  }
});

module.exports = router;