// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'senha-de-root',
  database: 'webAcademy',
});

module.exports = connection;