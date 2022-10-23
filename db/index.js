const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  findAllDepartments() {
    return this.connection
      .promise()
      .query(
        "SELECT id AS department_id, name AS department_name FROM department"
      );
  }

  findAllRoles() {
    return this.connection
      .promise()
      .query(
        "SELECT role.id, role.title, role.salary, department.name AS department FROM role LEFT JOIN department on role.department_id = department.id"
      );
  }

  findAllEmployees() {
    return this.connection
      .promise()
      .query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager, department.name AS department FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id"
      );
  }

  addDepartment(department) {
    return this.connection
      .promise()
      .query("INSERT INTO department SET ?", department);
  }

  addRole(role) {
    return this.connection.promise().query("INSERT INTO role SET ?", role);
  }

  addEmployee(employee) {
    return this.connection
      .promise()
      .query("INSERT INTO employee SET ?", employee);
  }

  updateEmployeerole() {
    return this.connection
      .promise()
      .query("UPDATE employee SET role_id = ? WHERE id = ?");
  }

  // updateEmployeemanager()

  //   deleteDepartment(department) {
  //     return this.connection
  //       .promise()
  //       .query("DELETE FROM department ?", department);
  //   }

  //   deleteRole() {
  //     return this.connection.promise().query("DELETE FROM role WHERE id = ?");
  //   }

  //   deleteEmployee() {
  //     return this.connection.promise().query("DELETE FROM employee WHERE id = ?");
  //   }
}

module.exports = new DB(connection);
