const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Array for answers to questions
const newStaffMemberData = [];

// Array object questions asked in CLI to user
const questions = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your ID number?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "list",
      message: "What is your role?",
      name: "role",
      choices: ["Engineer", "Intern", "Manager"],
    },
  ]);

  //  tbc

  // if statement for the manager, Engineer and Intern selected, answer these specific question

  if (answers.role === "Manager") {
    const managerAns = await inquirer.prompt([
      {
        type: "input",
        message: "What is your office number",
        name: "officeNumber",
      },
    ]);
    const newManager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      managerAns.officeNumber
    );
    newStaffMemberData.push(newManager);
  } else if (answers.role === "Engineer") {
    const githubAns = await inquirer.prompt([
      {
        type: "input",
        message: "What is your GitHub user name?",
        name: "github",
      },
    ]);
    const newEngineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      githubAns.github
    );
    newStaffMemberData.push(newEngineer);
  } else if (answers.role === "Intern") {
    const internAns = await inquirer.prompt([
      {
        type: "input",
        message: "What university did you attend?",
        name: "school",
      },
    ]);

    const newIntern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      internAns.school
    );
    newStaffMemberData.push(newIntern);
  }
};

// so far looks good to me. Now the prompt questions are needed to add.