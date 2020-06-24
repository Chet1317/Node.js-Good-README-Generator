const prompts = require('prompts');
const fs = require("fs");


const questions = [{
    type: "text",
    name: "title",
    message: "What is the title of your project?",
},
{
    type: "text",
    name: "description",
    message: "Provide a brief description for your project",
},
{
    type: "multiselect",
    name: "content",
    message: "Provide content here",
    choices: [{ value: "Installation" },
    { value: "Usage" },
    { value: "Licensing" },
    { value: "Contibutors" },
    { value: "Questions" }],
},
{
    type: "text",
    name: "installation",
    message: "How will you be installing?",
},
{
    type: "text",
    name: "usage",
    message: "How will it be used?",
},
{
    type: "select",
    name: "license",
    message: "Please choose a license.",
    choices: [{ value: "MIT" }, { value: "GNU" }],
},
{
    type: "text",
    name: "contributes",
    message: "List any collaborators, if any?",
},
{
    type: "text",
    name: "badge",
    message: "Badges let other developers know that you know what you're doing. Please provide badge if you wish here"
},
{
    type: "text",
    name: "questions",
    message: "How can we contact you for any questions?"
}
];


(async () => {
    const response = await prompts(questions);
    let readMeList = `# Title` + "\n" + `${response.title}` + "\n" +
        `# Description` + "\n" + `${response.description}` + "\n" + 
        `# Table of Contents` + "\n" + `[${response.content[0]}](#installation)`
        + "\n" + `[${response.content[1]}](#usage)` 
        + "\n" + `[${response.content[2]}](#license)`
        + "\n" + `[${response.content[3]}](#contributors)` + "\n" +
        `[${response.content[4]}](#questions)`
        + "\n" + `# Installation` + "\n" +
        `${response.installation}` + "\n" +
        `# Usage` + "\n" +
        `${response.usage}` + "\n" +
        `# Licensing` + "\n" +
        `${response.license}` + "\n" +
        `# Contributors` + "\n" + `${response.contributes}`
        + "\n" + `# Badge` + "\n" + `${response.badge}` + "\n" +
        `# Questions` + "\n" + `${response.questions}`
        
       

    fs.writeFile('README.md', readMeList, function (err) {
        if (err) throw err;
        console.log('updated');
       
        
    }
    )
    })();

        
        
       