const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  // Your MySQL username,
  user: "root",
  // Your MySQL password
  password: "Help_1234!",
  database: "keepntrack",
});

db.connect((err) => {
  if (err) throw err;
  else console.log("YAY");
});

module.exports = db;