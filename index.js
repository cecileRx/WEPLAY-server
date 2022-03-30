const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'UserSystem',
});

app.post('/create', (req, res) => {
    const info = req.body.info;

    db.query(
      'INSERT INTO users (info) VALUES (?)',
      [info],
      (err, res) => {
        if (err) => {
          console.log(err)
        } else {
          res.send('Values Inserted')
        }
      }
    );
});


app.listen(3001, () => {
  console.log('yeh the server is running on port 3001')
})

