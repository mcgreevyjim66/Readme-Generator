// import inquirer and file system packages
const inquirer = require('inquirer');
const fs = require('fs');

// declare global variable for license processing
var licenseBadge = ""
var licenseRef = ""
var licenseDesc = ""


// create array of questions for user to enter README file content
const questions = [   
{
  type: 'input',
  name: 'title',
  message: 'What is Title of your project?',
},
{
  type: 'input',
  name: 'description',
  message: 'What is the description of your project?',
},
{
  type: 'input',
  name: 'motivation',
  message: 'What was the motivation for building this project?',
},
{
  type: 'input',
  name: 'build',
  message: 'Why did you build this project?',
},
{
  type: 'input',
  name: 'problem',
  message: 'What problem does this project solve?',
},
{
  type: 'input',
  name: 'learn',
  message: 'What did you learn from this project?',
},
{
  type: 'input',
  name: 'instructions',
  message: 'What are the installation instructions of your project?',
},
{
  type: 'input',
  name: 'usage',
  message: 'What is the usage information of you project?',
},
{
type: 'list',
message: 'What is your preferred license?',
name: 'license',
choices: ['MIT License', 'GNU General Public License v3.0 (GPLv3)', 'BSD 3-Clause License'],
},
{
  type: 'input',
  name: 'contribution',
  message: 'What are the contribution guidelines for your project?',
},
{
  type: 'input',
  name: 'test',
  message: 'What are the test instructions for this project?',
},
{
  type: 'input',
  name: 'github',
  message: 'What is your github user name?',
},
{
  type: 'input',
  name: 'email',
  message: 'What is your contact email address?',
},
];

// function to write README.md file with users entered content
function writeToFile(fileName, data) {

  // get selected license
  var licenseSelected = (data.license)

  //parse out selected license, set badge and reference info
  processLicense(licenseSelected);

  
 // construct README.MD file content based on users input
  const fileContent = buildFile(data);

// write README.MD file to disk
  fs.writeFile(fileName, fileContent, (err) =>
    err ? console.log(error) : console.log("Sucess!")
  )


}

//parse out selected license, set badge and reference info
function processLicense(licenseSelected) {
  switch (licenseSelected) {
    case "MIT License":
      licenseBadge = "[![Badge License]][License]   "
      licenseRef = "[Badge License]: https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge"
      licenseDesc = "[License]: https://en.wikipedia.org/wiki/MIT_License"
      break;

    case "GNU General Public License v3.0 (GPLv3)":
      licenseBadge =  "[![GPLv3 License]][License GPL]"
      licenseRef = "[GPLv3 License]: https://img.shields.io/badge/license-GPLv3-blue.svg"
      licenseDesc = "[License GPL]: https://www.gnu.org/licenses/gpl-3.0.en.html"
      break;

    case "BSD 3-Clause License":
      licenseBadge = "[![BSD 3-Clause License]][License BSD]"
      licenseRef = "[BSD 3-Clause License]: https://img.shields.io/badge/license-BSD%203--Clause-blue.svg"
      licenseDesc = "[License BSD]: https://opensource.org/licenses/BSD-3-Clause"
      break;

    default:
      console.log("Unknown License");
  }


}

// build README.md file content using content entered by the user
function buildFile(data){
  let fileContent =  `
  # Title: ${data.title}
  ${licenseBadge}


  ## Description: ${data.description}
  
  - What is the motivation for building this project? ${data.motivation}
  - Why was this project built? ${data.build}
  - What problem does this project solve? ${data.problem}
  - What did you learn? ${data.learn}
  
  ## Table of Contents   
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.instructions}
  
  ## Usage
  
  ${data.usage}
  
    
  ## License
  
  - Here is license: ${data.license}

  - Here is Badge: ${licenseBadge}

  - Here is License Description: ${licenseDesc}


  ## Contribution
  
  ${data.contribution}
  
  ## Tests
  
  ${data.test}

  ## Questions
  
  - Here is a link to author's github profile: github.com/${data.github}.

  
  - Here is the author's contact information: ${data.email}

  <!----------------------------------{ Licenses }------------------------------->

[License]: https://en.wikipedia.org/wiki/MIT_License
[License GPL]: https://www.gnu.org/licenses/gpl-3.0.en.html
[License BSD]: https://opensource.org/licenses/BSD-3-Clause


<!----------------------------------{ Badges }--------------------------------->

[Badge License]: https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge

[GPLv3 License]: https://img.shields.io/badge/license-GPLv3-blue.svg

[BSD 3-Clause License]: https://img.shields.io/badge/license-BSD%203--Clause-blue.svg




  `

  return fileContent;
}


// initialize to server side program
function init() {
// use inquirer package to prompt the user for README.md file content
  inquirer
  .prompt(
    questions
  )
  .then((data) => {
 // call writeToFile to render and write the README.md file to disk
    writeToFile("./readme-output/README.md", data)
  });

}


// Function call to initialize app
init();

