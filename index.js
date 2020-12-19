// TODO: Include packages needed for this application
// const fs = require("fs");
const inquirer = require("inquirer");
// const generatePage = require("./Develop/utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "project",
      message: "What is your project title?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your project title!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Write a brief description of the project",
    },
    {
      type: "input",
      name: "installation",
      message: "List steps to install the project",
    },
    {
      type: "input",
      name: "usage",
      message: "What is the purpose of this project?",
    },
    {
      type: "list",
      name: "licenses",
      message:
        "What license would you use for that project? (Use arrow Down/Up keys to select)",
      choices: ["MIT", "GNU GPLv3", "GNU AGPLv3", "Mozilla"],
    },
    {
      type: "input",
      name: "contributors",
      message: "Name all the contributers",
    },
  ]);
};
questions().then((answers) => console.log(answers));
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
