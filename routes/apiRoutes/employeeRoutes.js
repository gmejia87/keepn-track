const express = require("express");
const db = require("../../db/connection");
const router = express.Router();

//get employees
router.get("/employees", (req, res) => {
  const sql = `SELECT * FROM employee`;
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

//get employee by managers

//get employee by department

//add an employee
router.post("/employees", ({ body }, res) => {
  const sql = `INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (?,?,?,?,?)`;
  const params = [
    body.id,
    body.first_name,
    body.last_name,
    body.role_id,
    body.manager_id,
  ];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "Employee added.",
      data: body,
    });
  });
});

//update employee's role
router.put("/employees/:id", (req, res) => {
  const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
  const params = [req.body.role_id, req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({
        message: "Employee not found.",
      });
    } else {
      res.json({
        message: "Employee role updated!",
        data: req.body,
        changes: result.affectedRows,
      });
    }
  });
});

//update employee's manager
router.put("/employees/:id", (req, res) => {
  const sql = `UPDATE employee SET manager_id = ? where id = ?`;
  const params = [req.body.manager_id, req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({
        message: "Employee not found.",
      });
    } else {
      res.json({
        message: "Manager updated!",
        data: req.body,
        changes: result.affectedRows,
      });
    }
  });
});

//delete an employee
router.delete("/employees/:id", (req, res) => {
  const sql = `DELETE FROM employee WHERE id = ?`;

  db.query(sql, req.params.id, (err, result) => {
    if (err) {
      res.status(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: "Employee not found.",
      });
    } else {
      res.json({
        messgage: "Employee deleted.",
        changes: result.affectedRows,
        id: req.params.id,
      });
    }
  });
});

module.exports = router;
