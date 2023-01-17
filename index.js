// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
function userInput(){
    return inquirer.prompt([
    {name: 'license',
    message: 'Select License:',
    type: 'list',
    choices: ["Academic Free License v3.0", "Apache license 2.0", "Artistic license 2.0", "Boost Software License 1.0", "BSD 2-clause license", "BSD 3-clause license", "Creative Commons Zero v1.0 Universal", "Creative Commons Attribution 4.0", "Creative Commons Attribution Share Alike 4.0", "Public License", "Educational Community License v2.0", "Eclipse Public License 1.0", "Eclipse Public License 2.0", "European Union Public License 1.1", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU General Public License v3.0",  "GNU Lesser General Public License v2.1", "GNU Lesser General Public License v3.0", "ISC", "LaTeX Project Public License v1.3c", "Microsoft Public License",  "MIT", "Mozilla Public License 2.0", "Open Software License 3.0", "SIL Open Font License 1.1", "University of Illinois/NCSA Open Source License", "The Unlicense", "zLib License"]},
    {name: 'title',
    message: 'Application Title',
    type: 'input'},
    {name: 'description',
    message: 'Please give a description of this application',
    type: 'input'},
    {name: 'install',
    message: 'What are the installation instructions for this application?',
    type: 'input'},
    {name: 'usage',
    message: 'How do I use this application?',
    type: 'input'},
    {name: 'contributing',
    message: 'What are the contribution guidelines for this application?',
    type: 'input'},
    {name: 'testing',
    message: 'What are the test instructions?',
    type: 'input'},
    {name: 'username',
    message: 'Please type your Github username', 
    type: 'input'},
    {name: 'email',
    message: 'Please type your email address',
    type: 'input'},
    {name: 'fileName',
    message: 'What would you like the title of this README to be?',
    type: 'input'},
])};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, 
    (err) => err ? console.error(err) : console.log(`${fileName}.md has been generated.`))
}

// TODO: Create a function to initialize app
async function init() {
    let answers = await userInput();
    writeToFile((answers.fileName),(generateMarkdown(answers)));
}

// Function call to initialize app
init();