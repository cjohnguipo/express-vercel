
const mysql = require('mysql');

const connection = mysql.createConnection({
host: 'mysql.wellness-ph.com',
user: 'dash_data_user',
password: 'MySql#2023',
database: 'dash_data'
})

const local = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'digitalpersona'
});


connection.connect(function(err) {
    if (err) throw err;
    }
);
    

module.exports = connection;