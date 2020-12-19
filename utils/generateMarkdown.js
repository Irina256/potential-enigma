// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  console.log("cool");
  if (!license) {
    return "";
  } else {
    `![badge](https://img.shields.io/badge/license-${licenses}-<blue>)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log("cool1");

  if (license === "MIT") {
    ` [MIT](https://choosealicense.com/licenses/mit/)`;
  } else if (license === "GNU GPLv3") {
    `[GNUGPLv3](https://choosealicense.com/licenses/mit/)`;
  } else if (license === "AGNU GPLv3") {
    `[AGNUGPLv3](https://choosealicense.com/licenses/mit/)`;
  } else if (license === "Mozilla") {
    `[Mozilla](https://choosealicense.com/licenses/mit/)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log("cool2");
  if (!license) {
    return "";
  } else {
    return true;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("cool3");
  return `# ${data.title}
 ## Description
  ${data.description}
 
  ## Table of Contents
      * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributers)
    * [Tests](#tests)
    * [Licences](#licenses)
  
    ##Installation
     ${data.installation}

    ## Usage
    ${data.usage}

    ## Credits
    ${data.contributers}
    GitHub: [@${data.github}](https://github.com/${data.github})

   ## Licences
   
    ${renderLicenseBadge(data.licences)}
    ${renderLicenseLink(data.licenses)}
   ${renderLicenseSection(data.licenses)}
   

    ## Badges
     ${data.badges}

     ## Tests
     ${data.tests}





`;
}

module.exports = generateMarkdown;
