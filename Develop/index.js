// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'Project Title?',
},
{
    type: 'input',
    name: 'description',
    message: 'Project Description?',
},
{
    type: 'input',
    name: 'installation',
    message: 'Installation Instructions?',
},
{
    type: 'input',
    name: 'usage',
    message: 'Project Usage?',
},
{
    type: 'input',
    name: 'guidelines',
    message: 'Contributing Guidelines?',
},
{
    type: 'input',
    name: 'tests',
    message: 'Tests?',
},


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
