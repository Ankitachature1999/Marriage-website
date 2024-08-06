// const express = require('express');
// const multer = require('multer');
// const mysql = require('mysql');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const nodemailer = require('nodemailer');
// const path = require('path');
// const crypto = require('crypto');

// const router = express.Router();

// // Multer configuration
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname);
//   }
// });

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 50 * 1024 * 1024 } // 50 MB
// });

// // Database connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'matrimony_db'
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//     return;
//   }
//   console.log('Connected to the MySQL database.');
// });

// // Create a transporter object for sending emails
// const transporter = nodemailer.createTransport({
//   service: 'gmail', // Use your email service provider
//   auth: {
//     user: 'your-email@gmail.com',
//     pass: 'your-email-password'
//   }
// });

// // JWT secret key
// const JWT_SECRET = 'your_jwt_secret_key'; // Replace with a strong secret key

// // API endpoint for registration
// router.post('/register', upload.single('profilePicture'), async (req, res) => {
//   const {
//     fullName,
//     email,
//     password,
//     salary,
//     dateOfBirth,
//     highestQualification,
//     job,
//     brotherName,
//     sisterName,
//     expectation,
//     fatherName,
//     fatherOccupation,
//     farm,
//     maternalUncle,
//     address,
//     mobileNo,
//   } = req.body;

//   const profilePicture = req.file ? req.file.filename : null;

//   try {
//     // Check if the email already exists
//     db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
//       if (err) {
//         console.error('Error checking email existence:', err);
//         return res.status(500).send('Error checking email existence');
//       }

//       if (results.length > 0) {
//         return res.status(400).send('Email already exists');
//       }

//       // Hash the password before storing it
//       const hashedPassword = await bcrypt.hash(password, 10);

//       // Insert user data into the database
//       const sql = 'INSERT INTO users SET ?';
//       const userData = {
//         fullName,
//         email,
//         password: hashedPassword, // Store the hashed password
//         salary,
//         dateOfBirth,
//         highestQualification,
//         job,
//         brotherName,
//         sisterName,
//         expectation,
//         fatherName,
//         fatherOccupation,
//         farm,
//         maternalUncle,
//         address,
//         mobileNo,
//         profilePicture,
//       };

//       db.query(sql, userData, (err, result) => {
//         if (err) {
//           console.error('Error inserting user data:', err);
//           return res.status(500).send('Error inserting user data');
//         }

//         // Generate a JWT token for the user
//         const token = jwt.sign({ id: result.insertId }, JWT_SECRET, { expiresIn: '1h' });

//         // Send a confirmation email to the user
//         const mailOptions = {
//           from: 'your-email@gmail.com',
//           to: email,
//           subject: 'Registration Confirmation',
//           text: `Dear ${fullName},\n\nThank you for registering on our platform.\n\nBest regards,\nYour Team`
//         };

//         transporter.sendMail(mailOptions, (error, info) => {
//           if (error) {
//             console.error('Error sending confirmation email:', error);
//           } else {
//             console.log('Confirmation email sent:', info.response);
//           }
//         });

//         res.status(200).json({ message: 'Registration successful', token });
//       });
//     });
//   } catch (error) {
//     console.error('Error during registration:', error);
//     res.status(500).send('Error during registration');
//   }
// });

// module.exports = router;