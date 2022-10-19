const express = require("express");
const db = require("./db/connection");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//use this to query the database to test connection before more code is written
// db.query(`SELECT * FROM department`, (err, rows) => {
//   console.log(rows);
// });

//route to handle user requests not supported by app
//default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
