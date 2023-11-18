// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: "Title",
      message: "what is the title named?"
    },

    {
      type: 'input',
      name: "Description",
      message: "Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:"
    },

    {
      type: 'input',
      name: "Table of Contents",
      message: "If your README is long, add a table of contents to make it easy for users to find what they need."
    },

    {
      type: 'input',
      name: "Installation",
      message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
    },

    {
      type: 'input',
      name: "Usage",
      message: "Provide instructions and examples for use. Include screenshots as needed."
    },

    {
      type: 'input',
      name: "License",
      message: ""
    },

    {
      type: 'input',
      name: "Credits",
      message: "List your collaborators, if any, with links to their GitHub profiles."
    },


    {
      type: 'input',
      name: "Tests",
      message: "Please enter test instructions"
    },

    {
      type: 'input',
      name: "Questions",
      message: "Please enter your Github username and email address so that users may reach out with additional questions"
    },

  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    //call the function to generate readme content
    const readmeContent = generateMarkdown(responses);
    //Output or save readme content as needed
    console.log(readmeContent);
  });
}
//ask the questions here
let responses = {
  title: "Turtle"
}
  generateMarkdown(responses)


// Function call to initialize app
init();
