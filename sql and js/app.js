const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Salam123',
  database: 'socialmedia'
});

db.query('SELECT 1', (err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.get('/api/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      return res.status(500).send('Error fetching users');
    }
    res.json(results);
  });
});


app.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  db.query('SELECT * FROM users WHERE id = ?', [userId], (err, result) => {
    if (err) {
      console.error('Error fetching user by ID:', err);
      return res.status(500).send('Error fetching user by ID');
    }
    if (result.length === 0) {
      return res.status(404).send('User not found');
    }
    res.json(result[0]);
  });
});


app.delete('/api/users/:id', (req, res) => {
  const userIdToDelete = req.params.id;
  db.query('DELETE FROM users WHERE id = ?', [userIdToDelete], (err, result) => {
    if (err) {
      console.error('Error deleting user:', err);
      return res.status(500).send('Error deleting user');
    }
    if (result.affectedRows === 0) {
      return res.status(404).send('User not found');
    }
    res.sendStatus(204); 
  });
});


app.post('/api/users', (req, res) => {
  const { name, surname, password, address } = req.body;
  db.query(
    'INSERT INTO users (name, surname, password, address) VALUES (?, ?, ?, ?)',
    [name, surname, password, address],
    (err, result) => {
      if (err) {
        console.error('Error inserting user:', err);
        return res.status(500).send('Error inserting user');
      }
      const insertedUserId = result.insertId;
      res.status(201).json({ id: insertedUserId });
    }
  );
});


app.post('/addUser', (req, res) => {
  const { name, surname, password, address } = req.body;

  
  db.query(
    'INSERT INTO users (name, surname, password, address) VALUES (?, ?, ?, ?)',
    [name, surname, password, address],
    (err, result) => {
      if (err) {
        console.error('Error inserting user:', err);
        return res.status(500).send('Error inserting user');
      }
      console.log('User inserted');
      res.redirect('/');
    }
  );
});


app.post('/deleteUser', (req, res) => {
  const userIdToDelete = req.body.deleteId;

  
  db.query(
    'DELETE FROM users WHERE id = ?',
    [userIdToDelete],
    (err, result) => {
      if (err) {
        console.error('Error deleting user:', err);
        return res.status(500).send('Error deleting user');
      }
      console.log('User deleted');
      res.redirect('/');
    }
  );
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
