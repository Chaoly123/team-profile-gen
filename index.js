// To validate email in inquirer


const inquirer = require("inquirer");
const Manager = require("./workers./Manager");
const Engineer = require("./workers./Engineer");
const Intern = require("./workers./Intern");
const { start } = require("repl");

// Displays questions for adding manager
const addManager = () => {
    inquirer.prompt({
        {  // team manager’s name, employee ID, email address, and office number
            type: 'input',
            message: 'What the manager name?',
            name: 'name'
        },
        {
            type: 'list',
            message: 'What the role id?',
            choice: ['Manager', 'Engineer', 'Intern'],
            name: 'role'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        },
        {
            type: 'input',
            message: "What the manager's office number?",
            name: 'office number'
        },
    ]).then(({ name, role, email, officeNum }) => {
            const addedManager = new Manager(name, role, email, officeNum)

            // missing something in here

            // go back to start
            start();
        }

        ));
}

const addEngineer = () => {
    inquirer.prompt({
        {  // team engineer’s name, ID, email, and GitHub username,
            type: 'input',
            message: 'What the engineer name?',
            name: 'name'
        },
        {
            type: 'list',
            message: 'What the role id?',
            choice: ['Manager', 'Engineer', 'Intern'],
            name: 'role'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        },
        {
            type: 'input',
            message: "What the github username?",
            name: 'username'
        },
    ]).then(({ name, id, email, gitHubUserName }) => {
            const addedEngineer = new Engineer(name, id, email, gitHubUserName)

            // missing something in here

            // go back to start
            start();
        }

        ));
}

const addIntern = () => {
    inquirer.prompt({
        {  // team intern’s name, ID, email, and school
            type: 'input',
            message: 'What the engineer name?',
            name: 'name'
        },
        {
            type: 'list',
            message: 'What the role id?',
            choice: ['Manager', 'Engineer', 'Intern'],
            name: 'role'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        },
        {
            type: 'input',
            message: "What the school you graduated from?",
            name: 'school'
        },
    ]).then(({ name, id, email, school }) => {
            const addedIntern = new Intern(name, id, email, school)

            // missing something in here

            // go back to start
            start();
        }

        ));
}

const addEmployee = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "What kind of new employee are you adding?",
            choices: ["Manager", "Engineer", "Intern"],
            name: "employeeToAdd"
        }
    ]).then(({ employeeToAdd }) => {
        switch (employeeToAdd) {
            case "Manager":
                addManager();
                break;

            case "Engineer":
                addEngineer();
                break;

            case "Intern":
                addIntern();
                break;

            default:
                break;
        }
    })
}

// Begin the app
const start = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "Choose an option:",
            choices: ["Add Employee By Role", "View Employee By Role", "View Employee By Email",],
            name: "initialChoice"
        }
    ]).then(resp => {
        switch (resp.initialChoice) {
            case "Add Employee By Role":
                break;

            case "View Employee by Role":
                break;

            case "View Employee By Email":
                break;

            default:
                break;
        }
    })
}



start();
// return inquirer
//   .prompt(
//     {
//       message: "Please enter your email",
//       name: "email",
//       type: "input",
//       default: () => { },
//       validate: function (email) {

//         valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

//         if (valid) {
//           console.log("Great job");
//           return true;
//         } else {
//           console.log(".  Please enter a valid email")
//           return false;
//         }
//       }
//     }
//   );