const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

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

// Create a transporter object for sending emails
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service provider
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

// Register route
app.post('/register', upload.single('profilePicture'), (req, res) => {
  const {
    fullName, email, password, confirmPassword, salary, dateOfBirth, highestQualification,
    job, brotherName, sisterName, expectation, fatherName, fatherOccupation,
    farm, maternalUncle, address, mobileNo
  } = req.body;
  const profilePicture = req.file ? req.file.path.replace('uploads/', '') : null;

  // Generate unique email and password
  const generatedEmail = `${Date.now()}@example.com`;
  const generatedPassword = crypto.randomBytes(8).toString('hex');

  const sql = `
    INSERT INTO users (
      fullName, email, password, confirmPassword, salary, dateOfBirth, highestQualification,
      job, brotherName, sisterName, expectation, fatherName, fatherOccupation,
      farm, maternalUncle, address, mobileNo, profilePicture
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    fullName, generatedEmail, generatedPassword, confirmPassword, salary, dateOfBirth, highestQualification,
    job, brotherName, sisterName, expectation, fatherName, fatherOccupation,
    farm, maternalUncle, address, mobileNo, profilePicture
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error saving data');
      return;
    }

    // Send confirmation email
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: generatedEmail,
      subject: 'Registration Successful',
      text: `Your registration is successful. Here are your login credentials:\n\nEmail: ${generatedEmail}\nPassword: ${generatedPassword}`
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error('Error sending email:', err);
        res.status(500).send('Error sending email');
        return;
      }
      console.log('Email sent:', info.response);
      res.status(200).send('Data saved successfully');
    });
  });
});

// Route to get all users
app.get('/get-all-users', (req, res) => {
  const sql = 'SELECT * FROM users';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      res.status(500).send('Error fetching users');
      return;
    }

    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
