const express = require("express");
const db = require("../../db/connection");
const router = express.Router();

//get roles
router.get("/roles", (req, res) => {
  const sql = `SELECT * FROM role`;
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
router.post("/roles", ({ body }, res) => {
  const sql = `INSERT INTO role (id, title, salary, department_id) VALUES (?,?,?,?)`;
  const params = [body.id, body.title, body.salary, body.department_id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "Role added.",
      data: body,
    });
  });
});

//delete a department
router.delete("/roles/:id", (req, res) => {
  const sql = `DELETE FROM role WHERE id = ?`;

  db.query(sql, req.params.id, (err, result) => {
    if (err) {
      res.status(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: "Role not found.",
      });
    } else {
      res.json({
        messgage: "Role deleted.",
        changes: result.affectedRows,
        id: req.params.id,
      });
    }
  });
});

module.exports = router;
