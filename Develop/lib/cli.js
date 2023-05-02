const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
  run() {
    return inquirer.prompt([
      {
      type: "input",
      name: "text",
      message: "What text would you like in your SVG?(must be 3 or less)",
      validate: function(text) {
        if(text.length < 3) {
        return  "Please retry. Must be 3 or less characters.";
        }
        return true;
      }
    },
    {
      type: "input",
      name: "textColor", 
      message: "What color would you like your text to be?"
    },
    {
      type: "list",
      name: "shape",
      message: "Which shape would you like your SVG to be?",
      choices: ["Circle", "Triangle", "Square"]
    },
    {
      type: "input",
      name: "shapeColor",
      message: "What color would you like your shape to be?"
    }
  ]).then(({text, textColor, shape, shapeColor}) => {
      let svg;
      if(shape == "Circle") {
        svg = new Circle();
      }
      if(shape == "Triangle") {
        svg = new Triangle();
      }
      if(shape == "Square") {
        svg = new Square();
      }
      svg.setColor(shapeColor);
      const output = new SVG();
      output.setText(text, textColor);
      output.setShape(svg);
      return writeFile("logo.svg", output.getSVG())
    })
    .then(function() {
      console.log("logo.svg was created");
    })
    .catch((err) => {
      console.log(err);
    });
  }
}   

module.exports = CLI;
