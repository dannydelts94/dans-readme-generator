// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = license.replace('', '&ensp;');
  return `
  [![License Badge](https://img.shields.io/badge/License-${licenseBadge}-yellow)](${renderLicenseLink(license)});
  `
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let linkURL = license.toLowerCase().replace('', '-');
  return `https://choosealicense.com/licenses/${linkURL}`
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license == 'none') {

    return '';

  } else {

    return `
    ## License
    ${license}
    ${renderLicenseBadge(license)}`

  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
const { ghUserName, licenseList } = data;
  return `
  # ${data.projectTitle}

  ## Description
  ${data.projectDescription}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation 
  ${data.installationInstructions}

  ## Usage
  ${data.usageInforamtion}

  ## License
  ${renderLicenseSection(licenseList)}

  ## Contributing
  ${data.contributionGuidelines}

  ## Tests
  ${data.testInstructions}

  ## Questions
If you have questions or comments please refer to the repo [${ghUserName}](https://github.com/${ghUserName}) or email me at ${data.emailAddress}

`;
}

module.exports = generateMarkdown;