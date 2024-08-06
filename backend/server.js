const express = require('express');
const mysql = require('mysql');
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcrypt');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'matrimony_db',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

// Multer setup for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// JWT Secret
const JWT_SECRET = 'your_jwt_secret_key';

// Register route
app.post('/api/users', upload.single('profilePicture'), async (req, res) => {
  const {
    fullName,
    email,
    password,
    confirmPassword,
    salary,
    dateOfBirth,
    highestQualification,
    job,
    brotherName,
    sisterName,
    expectation,
    fatherName,
    fatherOccupation,
    farm,
    maternalUncle,
    address,
    mobileNo,
  } = req.body;
  const profilePicture = req.file ? req.file.filename : null;

  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = `INSERT INTO users (fullName, email, password, confirmPassword, salary, dateOfBirth, highestQualification, job, brotherName, sisterName, expectation, fatherName, fatherOccupation, farm, maternalUncle, address, mobileNo, profilePicture) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      fullName,
      email,
      hashedPassword,
      hashedPassword,
      salary,
      dateOfBirth,
      highestQualification,
      job,
      brotherName,
      sisterName,
      expectation,
      fatherName,
      fatherOccupation,
      farm,
      maternalUncle,
      address,
      mobileNo,
      profilePicture,
    ];

    db.query(sql, values, (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({ error: 'Email already exists' });
        }
        return res.status(500).json({ error: 'Error inserting data into the database' });
      }
      res.status(201).json({ message: 'User added successfully' });
    });
  } catch (error) {
    res.status(500).json({ error: 'Error hashing password' });
  }
});

// Endpoint to get all profiles
app.get('/api/profiles', async (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).json({ error: 'An error occurred while fetching profiles.' });
    }
    res.json(results);
  });
});

// Login route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], async (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database query failed' });
    }
    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = results[0];
    try {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ message: 'Login successful', token });
      } else {
        res.status(401).json({ error: 'Invalid email or password' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error verifying password' });
    }
  });
});

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// // Profile route (User-specific profile data)
// app.get('/api/profile', authenticateToken, (req, res) => {
//   const userId = req.user.id;
//   const sql = 'SELECT * FROM users WHERE id = ?';
//   db.query(sql, [userId], (err, results) => {
//     if (err) {
//       return res.status(500).json({ error: 'Database query failed' });
//     }
//     if (results.length === 0) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     res.json(results[0]);
//   });
// });


// Endpoint to get all profiles
app.get('/api/profiles', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'An error occurred while fetching profiles' });
    }
    res.json(results);
  });
});


// Update user data route
app.put('/api/profile', upload.single('profilePicture'), authenticateToken, async (req, res) => {
  const {
    fullName,
    email,
    salary,
    dateOfBirth,
    highestQualification,
    job,
    brotherName,
    sisterName,
    expectation,
    fatherName,
    fatherOccupation,
    farm,
    maternalUncle,
    address,
    mobileNo,
  } = req.body;
  const profilePicture = req.file ? req.file.filename : null;
  const userId = req.user.id;

  const sql = `UPDATE users SET fullName = ?, email = ?, salary = ?, dateOfBirth = ?, highestQualification = ?, job = ?, brotherName = ?, sisterName = ?, expectation = ?, fatherName = ?, fatherOccupation = ?, farm = ?, maternalUncle = ?, address = ?, mobileNo = ?, profilePicture = ? WHERE id = ?`;
  const values = [
    fullName,
    email,
    salary,
    dateOfBirth,
    highestQualification,
    job,
    brotherName,
    sisterName,
    expectation,
    fatherName,
    fatherOccupation,
    farm,
    maternalUncle,
    address,
    mobileNo,
    profilePicture,
    userId
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error updating user data' });
    }
    res.json({ message: 'User updated successfully' });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
