const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
        validate: projectTitleInput => {
            if (projectTitleInput) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false;
            }

        }
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Can you provide a brief description of your project?',
        validate: projectDescriptionInput => {
            if (projectDescriptionInput) {
                return true;
            } else {
                console.log('Please enter a description of your project!');
                return false;
            }

        }
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'Can you provide instructions on how to install your project?',
        validate: installationInstructionsInput => {
            if (installationInstructionsInput) {
                return true;
            } else {
                console.log('Please enter installation instructions!');
                return false;
            }

        }
    },
    {
        type: 'input',
        name: 'usageInformation',
        message: 'Can you provide inforamtion on how to use your project?',
        validate: usageInformationInput => {
            if (usageInformationInput) {
                return true;
            } else {
                console.log('Please enter usage inforamtion!');
                return false;
            }

        }
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'How can users contribute to your project?',
        validate: contributionGuidelineInput => {
            if (contributionGuidelineInput) {
                return true;
            } else {
                console.log('Please enter contribution guidelines!');
                return false;
            }

        }
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'How can users test your project?',
        validate: testInstructionsInput => {
            if (testInstructionsInput) {
                return true;
            } else {
                console.log('Please enter test instructions!');
                return false;
            }

        }
    },
    {
        type: 'list',
        name: 'licenseList',
        message: 'What license would you like your project to have?',

        choices: [
            'MIT License',
            'Creative Commons Zero v1.0 Universal',
            'none',
            'Mozilla Public License 2.0',
        ],
    },
    {
        type: 'input',
        name: 'ghUserName',
        message: 'What is your GitHub username?',
        validate: userNameInput => {
            if (userNameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }

        }
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'What is your email address?',
        validate: emailaddressInput => {
            if (emailaddressInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }

        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);

        console.log('Your README was created!');
    })

};

// TODO: Create a function to initialize app
function init() {


    console.log(`Please respond to the following prompts to generate your README!`);
  
    inquirer.prompt(questions)
    .then(readmeData => {
writeToFile('/Users/danielrescigno/pen_bootcamp/challenges/dans-readme-generator/output/readme.md' , generateMarkdown(readmeData))
    })
};

// Function call to initialize app
init();

