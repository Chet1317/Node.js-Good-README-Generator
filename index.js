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
    message: "Provide a brief description for your project", 
},
{
    type: "multiselect",
    name: "content",
    message: "Provide content here",
    choices: ["installation", "Usage", "Licensing", "Contibuters", "Questions"]
},
{
    type: "text",
    name: "installation",
    message: "How will you be installing?",
},
{
    type: "text",
    name: "usage",
    message: "How will it be used",
},
{
    type: "text",
    name: "license",
    message: "Is the project Licensed and how?",
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
    
    let readMeList = response.title + "\n" + response.description + "\n" + response.content.choices + "\n" + response.installation + "\n" + response.usage +"\n" + response.license +"\n" + response.contributes +"\n" + response.badge +"\n" + response.questions

    fs.writeFile('README.md', readMeList, function (err){
    if(err) throw err;
    console.log('updated');

}
)
 })();

   