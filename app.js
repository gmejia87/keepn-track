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
          "Update Employee Role",
          // "Update Employee Manager",
          // "Delete a Department",
          // "Delete a Role",
          // "Delete an Employee",
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
      } else if (answer.type === "Update Employee Role") {
        updateEmployeerole();
      }
      // else if (answer.type === "Update Employee Manager") {
      //   updateEmployeeManager();
      // } else if (answer.type === "Delete a Department") {
      //   deleteDepartment();
      // } else if (answer.type === "Delete a Role") {
      //   deleteRole();
      // } else if (answer.type === "Delete an Employee") {
      //   deleteEmployee();
      // }
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
        console.log(`Employee ${answer.first_name} added.`);
      });
    });
}

function updateEmployeerole() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "first_name",
        message: "Which employee's role do you want to update?",
        choices: [
          "Daffy",
          "Minni",
          "Cindy",
          "The",
          "Mayor",
          "Simon",
          "Nemo",
          "Dory",
          "Sally",
        ],
      },
      {
        type: "list",
        name: "role_id",
        message: "What role do you want to assign them?",
        choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      },
    ])
    .then((answer) => {
      db.updateEmployeerole(answer).then(() => {
        console.log(`Updated employee's role.`);
      });
    });
}

// function updateEmployeemanager()

// function deleteDepartment() {
//   inquirer
//     .prompt([
//       {
//         type: "list",
//         name: "name",
//         message: "What department do you want to delete?",
//         choices: ["Stem", "Labor", "Delivery"],
//       },
//     ])
//     .then((answer) => {
//       db.deleteDepartment(answer).then(() => {
//         console.log(`Deparment deleted.`);
//       });
//     });
// }

// function deleteRole() {
//   inquirer
//     .prompt([
//       {
//         type: "list",
//         name: "name",
//         message: "What role do you want to delete?",
//         choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
//       },
//     ])
//     .then((answer) => {
//       db.deleteRole(answer).then(() => {
//         console.log(`Role deleted.`);
//       });
//     });
// }
// function deleteEmployee() {
//   inquirer
//     .prompt([
//       {
//         type: "list",
//         name: "name",
//         message: "Which employee do you want to delete?",
//         choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
//       },
//     ])
//     .then((answer) => {
//       db.deleteRole(answer).then(() => {
//         console.log(`Role deleted.`);
//       });
//     });
// }

promptUser();
