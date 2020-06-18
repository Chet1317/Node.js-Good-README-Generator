const prompts = require('prompts');
const fs = require("fs")

const questions = [{
    type: "text",
    name: "title",
    message: "What is the title of your project?",
},
{
    type: "text",
    name: "description",
    message: "Provide breif description for your project", 
},
{
    type: "text",
    name: "table",
    message: "Provide a table of contents for your project",
},
{
    type: "text",
    name: "installation",
    message: "How will you be installing?",
},
{
    type: "text",
    name: "usage",
    message: "Please provide instructions for use",
},
{
    type: "text",
    name: "license",
    message: "List any liscening for your project",
},
{
    type: "text",
    name: "contributes",
    message: "List any collaborators, if any?",
},
{
    type: "text",
    name: "tests",
    message: "Provide how to run test of your project",

    type: "text",
    name: "badge",
    message: "Badges let other developers know that you know what you're doing. Please provide badge if you wish here"
}

];

(async () => {
    const response = await prompts(questions);
    
    let readMeList = response.title + "\n" + response.description +"\n" + response.installation

    fs.writeFile('README.md', readMeList, function (err){
    if(err) throw err;
    console.log('updated');

}
)
 })();

   
function init() {

}

init();
