const { Router } = require('express');

const r = Router();

r.get('/', (req, res) => {
  const users = [];

    const mysql = require('mysql')
    const connection = mysql.createConnection({
      host: 'mysql.wellness-ph.com',
      user: 'dash_data_user',
      password: 'MySql#2023',
      database: 'dash_data'
    })

    const connection2 = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'digitalpersona'
      });
      
      connection.connect(function(err) {
          if (err) throw err;
        }
      );

      connection.query('SELECT fullname from users', (err, rows, fields) => {
      if (!err)   {
        rows.forEach(element => {
          users.push(element);
         });

        res.json(users);
      }
    })

    connection.end();  
  
});
 

module.exports = r;
