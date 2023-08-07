// Inquirer Import
const inquirer = require("inquirer");

const fs = require("fs");

const { Triangle, Square, Circle } = require("./lib/shapes");

function writeToFile(fileName, answer)

// Prompts for user to answer regarding the logo
function userPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter up to three characters for logo display.",
        name: "text",
      },

      {
        type: "input",
        message:
          "Choose a text color (Enter color keyword OR a hexadecimal number)",
        name: "textColor",
      },

      {
        type: "list",
        message: "What shape would you like the logo to be?",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },

      {
        type: "input",
        message:
          "Choose shapes color (Enter color keyword OR a hexadecimal number)",
        name: "shapeColor",
      },
    ])
    .then((answers) => {
      // Error handling for text prompt (user must enter 3 characters or less for logo to generate)
      if (answers.text.length > 3) {
        console.log("Must enter a value of 3 characters");
        userPrompt();
      } else {
        // Calling write file function to generate SVG file
        writeToFile("logo.svg", answers);
      }
    });
}

// Calling promptUser function so inquirer prompts fire off when application is ran
userPrompt();
