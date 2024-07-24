const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Serve static files from 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 } // 50 MB
});

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'matrimony_db'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

// Register route
app.post('/register', upload.single('profilePicture'), (req, res) => {
  const {
    fullName, email, password, confirmPassword, salary, dateOfBirth, highestQualification,
    job, brotherName, sisterName, expectation, fatherName, fatherOccupation,
    farm, maternalUncle, address, mobileNo
  } = req.body;
  const profilePicture = req.file ? req.file.path : null;

  console.log('Received data:', req.body); // Log received data
  console.log('Profile picture:', profilePicture); // Log profile picture path

  const sql = `
    INSERT INTO users (
      fullName, email, password, salary, dateOfBirth, highestQualification,
      job, brotherName, sisterName, expectation, fatherName, fatherOccupation,
      farm, maternalUncle, address, mobileNo, profilePicture
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    fullName, email, password, salary, dateOfBirth, highestQualification,
    job, brotherName, sisterName, expectation, fatherName, fatherOccupation,
    farm, maternalUncle, address, mobileNo, profilePicture
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err); // Detailed error logging
      res.status(500).send('Error saving data');
      return;
    }
    console.log('Insert result:', result); // Log insert result
    res.status(200).send('Data saved successfully');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
