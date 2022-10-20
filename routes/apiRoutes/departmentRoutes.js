const express = require("express");
const db = require("../../db/connection");
const router = express.Router();

//get a department
router.get("/departments", (req, res) => {
  const sql = `SELECT * FROM department`;
  const params = [req.params.id];

  db.query(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

//add a department
router.post("/departments", ({ body }, res) => {
  const sql = `INSERT INTO department (id, name) VALUES (?,?)`;
  const params = [body.id, body.name];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "department added",
      data: body,
    });
  });
});

//delete a department
router.delete("/departments", (req, res) => {
  const sql = `DELETE FROM department WHERE = ?`;

  db.query(sql, req.params.id, (err, result) => {
    if (err) {
      res.status(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: "Department not found.",
      });
    } else {
      res.json({
        messgage: "Department deleted.",
        changes: result.affectedRows,
        id: req.params.id,
      });
    }
  });
});

module.exports = router;
