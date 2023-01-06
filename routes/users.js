const { Router } = require('express');
const Db = require('../common/utils');

const r = Router();
 
r.get('/', (req, res) => {
  const users = [];


    res.json(Db.handler);
    //   Db.query('SELECT fullname from users', (err, rows, fields) => {
    //   if (!err)   {
    //     rows.forEach(element => {
    //       users.push(element);
    //      });

    //     res.json(users);
    //   }
    // })

    // Db.end();  
  
});
  

module.exports = r;
