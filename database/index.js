const mysql = require('mysql');
const config = require('./config.js');
const db = mysql.createConnection(config);

db.connect((err) => {
  if(err){
    console.log('Error connecting to Db', err);
    return;
  }
  console.log('Connected to db');
});

module.exports = db;