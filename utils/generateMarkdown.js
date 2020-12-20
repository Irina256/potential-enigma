// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const renderLicenseBadge = (license) => {
  if (license) {
    return `License: ${license}`;
  } else {
    return "";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return (
      `
    https://choosealicense.com/licenses/` + license
    );
  } else {
    return "";
  }
}

const generateInstallation = (installText) => {
  if (!installText) {
    return "";
  } else {
    return `## Installation
   ${installText}
    `;
  }
};
const generateTests = (testImages) => {
  if (!testImages) {
    return "";
  } else {
    return `Here is a screenshot of a readme file generator:
     `;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (!license) {
    return "";
  } else {
    return `* [Licenses](#licenses)
    `;
  }
};
const installConfirm = (confirm) => {
  if (!confirm) {
    return "";
  } else {
    return `* [Installation](#installation)`;
  }
};
const testsConfirm = (test) => {
  if (!test) {
    return "";
  } else {
    return `## Tests`;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
  ${data.description}
 
## Table of Contents
  ${installConfirm(data.installation)}
  * [Usage](#usage)
  * [Contributing](#contributers)
  * [Tests](#tests)
  ${renderLicenseSection(data.licenses)}
  
  ${generateInstallation(data.installation)}
  

## Usage
  ${data.usage}

## Credits
  This application was developed by: ${data.contributors}

  GitHub: [${data.github}](https://github.com/${data.github})

  Email:  [${data.email}](${data.email})

## Licenses
  This application is under the ${data.licenses} license

  ${renderLicenseBadge(data.licenses)}

  ![badge](https://img.shields.io/badge/license-${data.licenses}-blue);
  
  ${renderLicenseLink(data.licenses)}

  ${testsConfirm(data.tests)}
  ${generateTests(data.tests)}

`;
}

module.exports = generateMarkdown;
