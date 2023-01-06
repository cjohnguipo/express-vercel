const router = require("express").Router();
const { publicPosts, privatePosts } = require("../database");
const authToken = require("../middleware/authenticateToken");
  

router.get("/users", (req, res) => {
   
    const mysql = require('mysql')
    // const connection = mysql.createConnection({
    //   host: 'mysql.wellness-ph.com',
    //   user: 'dash_data_user',
    //   password: 'MySql#2023',
    //   database: 'dash_data'
    // })

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'digitalpersona'
      });
      
      connection.connect((err) => {
        if (err)  console.log( err);
        }
      );

      connection.query('SELECT Name from user', (err, rows, fields) => {
      if (err)  
          console.log( err);
      else
          console.log( rows); 
    })

    connection.end();  
});

router.get("/public", (req, res) => {
  res.json(publicPosts);
});

router.get("/private", authToken, (req, res) => {
  res.json(privatePosts);
});

module.exports = router;
