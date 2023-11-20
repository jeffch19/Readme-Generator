// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
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
      message: "Provide a short description explaining the what, why, and how of your project."
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
function writeToFile(fileName, data) {
  // Check if the output folder exists, create it if not
  const outputFolder = './output';
  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
  }

  // Generate filepath
  const filePath = `${outputFolder}/${fileName}.md`;

  // Write the readme content to the file
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error('Error writing readme file', err);
    } else {
      console.log(`README file has been successfully written to ${filePath}`);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    // Ensure that the title is provided before proceeding
    if (!responses.title) {
      console.error('Please provide a title for your project.');
      return;
    }

    // Generate filepath
    const fileName = responses.title.replace(/\s+/g, '-').toLowerCase(); // Make a filename from the title
    const filePath = `${outputFolder}/${fileName}.md`;

    // Call the function to generate readme content
    const readmeContent = generateMarkdown(responses);

    // Output or save readme content as needed
    console.log(readmeContent);

    // Call the function to write to file
    writeToFile(filePath, readmeContent);
  });
}
//ask the questions here
let responses = {
  // title: "Turtle"
}


// Function call to initialize app
init();
