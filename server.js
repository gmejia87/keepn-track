const express = require("express");
const db = require("./db/connection");
const apiRoutes = require("./routes/apiRoutes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//use apiRoutes
app.use("/api", apiRoutes);

//route to handle user requests not supported by app
//default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

//start server after db connection
db.connect((err) => {
  if (err) throw err;
  console.log("Database connected.");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
  });
});