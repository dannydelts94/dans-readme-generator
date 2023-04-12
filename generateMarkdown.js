// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = license.replace('','&nbsp');
  return `
  [![License Badge](https://img.shields.io/badge/License-${licenseBadge}-yellow)](${renderLicenseLink(license)});
  `
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = license.toLowerCase().replace('','-');
  return `https://choosealicense.com/licenses/${licenseLink}`
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
`;
}

module.exports = generateMarkdown;