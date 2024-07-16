const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000; // Make sure this port matches the one you're using in your frontend requests

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema and model for your data
const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  confirmPassword: String,
  gender: String,
  dateOfBirth: String,
  height: String,
  maritalStatus: String,
  motherTongue: String,
  religion: String,
  city: String,
  pinCode: String,
  highestQualification: String,
  collegeName: String,
  job: String,
  jobType: String,
  annualIncome: String,
  fatherName: String,
  motherName: String,
  liveWithFamily: String,
  familyType: String,
  diet: String,
  profileImage: String // Store the file path as a string
});
const User = mongoose.model('User', userSchema);

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

// Create uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Route to handle form data submission
app.post('/register', upload.single('profileImage'), async (req, res) => {
  try {
    const { body, file } = req;

    const newUser = new User({
      ...body,
      profileImage: file ? file.path : null
    });

    await newUser.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('Error registering user');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
