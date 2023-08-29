// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [    {
  type: 'input',
  name: 'name',
  message: 'What is your name?',
},
{
  type: 'checkbox',
  message: 'What languages do you know?',
  name: 'stack',
  choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
},
{
  type: 'list',
  message: 'What is your preferred method of communication?',
  name: 'contact',
  choices: ['email', 'phone', 'telekinesis'],
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  //const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

  fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    err ? console.log(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis'],
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

