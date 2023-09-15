const { app, db } = require('./app');

app.post('/addUser', (req, res) => {
  const { name, surname, password, address } = req.body;
  console.log('Received form data:', { name, surname, password, address });

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
