const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'react-context-demo',
    password: '123456',
    database: 'react-context-demo',
  });
  
  db.connect((err) => {
    if (err) {
      console.error('Database connection error:', err);
    } else {
      console.log('Connected to the database');
    }
  });
  module.exports = { db };

