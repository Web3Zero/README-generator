// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require("path");

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
    {
        type: 'input',
        name: 'email',
        message: 'Email?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'GitHub?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'License?',
        choices: ['MIT', 'ISC', 'GNUPLv3', 'None'],
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
 return fs.writeFileSync(path.join(process.cwd(),"/Dist",fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
       .then(answers => {
        writeToFile("Readme.md",generateMarkdown(answers))
        console.log("success")
       })
}

// Function call to initialize app
init();
