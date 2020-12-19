// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// const generatePage = require("./Develop/utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const userPrompt = (userInput) => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
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
    {
      type: "confirm",
      name: "tests",
      message: "Is there any tests included?",
      default: false,
    },
    {
      type: "input",
      name: "github",
      message: "Please enter your GitHub username",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email",
    },
  ]);
};
userPrompt().then((userInput) => {
  return generateMarkdown(userInput);
});

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
