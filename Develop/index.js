// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const getReadme = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [ 
    {
        type: "input", 
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input", 
        name: "description",
        message: "Please write a description of your project.",
    }, 
    {
        type: "input", 
        name: "installation",
        message: "How was this project created?"
    },
    {
        type: "input", 
        name: "usage",
        message: "How would one go about using this?"
    },
    {
        type: "checkbox", 
        name: "license",
        message: "What type of licence did you use for this?",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: "input", 
        name: "contributions",
        message: "Who and what contributed to this project?"
    },
    {
        type: "input", 
        name: "tests",
        message: "What kind of tests were performed for this project?"
    },
    {
        type: "input", 
        name: "username",
        message: "Please enter your github username."
    },
    {
        type: "input", 
        name: "email",
        message: "Please enter your email address."
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log (err)
        }
    console.log ("Success!");
    }); 
}; 
    
// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(function (answers) {
        console.log(answers); 
        writeToFile("ReadMe.md", generateMarkdown(answers))

    });
}; 

// Function call to initialize app
init();
