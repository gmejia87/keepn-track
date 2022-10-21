const inquirer = require("inquirer");
const cTable = require("console.table");
const db = require("./db");

const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "type",
        message: "What would you like to do?",
        choices: [
          "View all Departments",
          "View all Roles",
          "View all Employees",
          "Add a Department",
          "Add a Role",
          "Add an Employee",
          "Delete a Department",
          "Delete a Role",
          "Delete an Employee",
          "Update Employee Role",
          "Update Employee Manager",
        ],
      },
    ])
    .then((answer) => {
      if (answer.type === "View all Departments") {
        viewDepartments();
      } else if (answer.type === "View all Roles") {
        viewRoles();
      } else if (answer.type === "View all Employees") {
        viewEmployees();
      } else if (answer.type === "Add a Department") {
        addDepartment();
      } else if (answer.type === "Add a Role") {
        addRole();
      } else if (answer.type === "Add an Employee") {
        addEmployee();
      }
    });
};

function viewDepartments() {
  db.findAllDepartments().then(([departments]) => {
    console.table(departments);
  });
}

function viewRoles() {
  db.findAllRoles().then(([roles]) => {
    console.table(roles);
  });
}

function viewEmployees() {
  db.findAllEmployees().then(([employees]) => {
    console.table(employees);
  });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What's the department name?",
      },
    ])
    .then((answer) => {
      db.addDepartment(answer).then(() => {
        console.log(`Department ${answer.name} added.`);
      });
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What's the role title?",
      },
      {
        type: "input",
        name: "salary",
        message: "What's the role salary?",
      },
      {
        type: "list",
        name: "department_id",
        message: "What department is the role belong to?",
        choices: ["1", "2", "3"],
      },
    ])
    .then((answer) => {
      db.addRole(answer).then(() => {
        console.log(`Role ${answer.title} added.`);
      });
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "What's the employee's first name?",
      },
      {
        type: "input",
        name: "last_name",
        message: "What's the employee's last name?",
      },
      {
        type: "list",
        name: "role_id",
        message: "What's the employee's role?",
        choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      },
      {
        type: "list",
        name: "manager_id",
        message: "Who's the employee's manager?",
        choices: ["1", "4", "7"],
      },
    ])
    .then((answer) => {
      db.addEmployee(answer).then(() => {
        console.log(`Employee added.`);
      });
    });
}

// deleteDepartment()
// deleteRole()
// deleteEmployee()
// updateEmployeerole()
// updateEmployeemanager()
promptUser();
