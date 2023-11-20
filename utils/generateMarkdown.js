// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  };
  return licenseBadges[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    MIT: '[MIT License](https://opensource.org/licenses/MIT)'
  };
  return licenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);

  return licenseBadge ? `## License\n${licenseBadge}\nFor more details, see the [license](${licenseLink}).\n` : '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.Title); //check casing
  const readmeContent = `
# ${data.Title}

## Description
${data.Description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.Installation}

## Usage
${data.Usage}

## License
${renderLicenseSection(data.License)}

## Contributing
${data.Credits}

## Tests
${data.Tests}

## Questions
GitHub: [${data.Questions}](https://github.com/${data.Questions})
Email: ${data.Questions}
`;

return readmeContent;
}

module.exports = generateMarkdown;
