// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return ` ![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } return "";
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `* [License](#License)`;
  } return "";
}




// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
  Licensed under the ${license} license`
  } else {
    return " "
  }
}


// TODO: Create a function to generate markdown for README


function generateMarkdown(answers) {

  return `
  # ${answers.title}

  ${renderLicenseBadge(answers.license)}

  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
 ${renderLicenseLink(answers.license)}
  * [Contributing Guidelines](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ## Description
  ${answers.description}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ${renderLicenseSection(answers.license)}

  ## Contributing Guidelines
  ${answers.guidelines}

  ## Tests
  ${answers.tests}

  ## Questions
  If you have any questions then email me at ${answers.email}
  You can see more of my work at [${answers.github}](https://github.com/${answers.github})

`
}


module.exports = generateMarkdown;
