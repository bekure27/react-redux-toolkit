const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const {db} = require('./db');


const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

app.get('/',(req,res) => {
    res.send('abebe')
});
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    } else if (results.length > 0) {
      bcrypt.compare(password, results[0].password, (bcryptErr, bcryptResult) => {
        if (bcryptErr || !bcryptResult) {
          res.status(401).json({ error: 'Authentication Failed' });
        } else {
          res.status(200).json({ message: 'Authentication Successful' });
        }
      });
    } else {
      res.status(401).json({ error: 'User not found' });
    }
  });
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
  
    bcrypt.hash(password, 10, (hashErr, hash) => {
      if (hashErr) {
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hash], (insertErr, result) => {
          if (insertErr) {
            res.status(500).json({ error: 'Internal Server Error' });
          } else {
            res.status(201).json({ message: 'Registration Successful' });
          }
        });
      }
    });
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`http://localhost:${port}`);
  });