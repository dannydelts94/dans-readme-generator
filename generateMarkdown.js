function generateMarkdown(data) {
const { ghUserName, licenseList, projectTitle, projectDescription, installationInstructions, usageInformation, contributionGuidelines, emailAddress, testInstructions } = data;
  return `
# ${projectTitle}
## Description
${projectDescription}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation 
${installationInstructions}
## Usage
${usageInformation}
## License
![badge](https://img.shields.io/badge/license-MIT%20License-yellow)
  
Please read more about the ${licenseList}. <https://opensource.org/license/mit>
## Contributing
${contributionGuidelines}
 ## Tests
${testInstructions}
## Questions
If you have questions or comments please refer to the repo [${ghUserName}](https://github.com/${ghUserName}) or email me at ${emailAddress}
`;
}

module.exports = generateMarkdown;