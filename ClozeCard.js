
// Install inquirer to allow user input
var inquirer = require('inquirer');
// Made constructor function to create cloze card objects with full text, cloze, and partial
function ClozeCard(fulltext, cloze, partial) {
    this.fulltext = fulltext;
    this.cloze = cloze;
    this.partial = partial;
  
    //Made print info function to console log front and back
    this.printInfo = function() {
        console.log("Full: " + this.fulltext, "Cloze: " + this.cloze, "Partial: " + this.partial);
    };
}
// used inquirer prompt to ask the user for input to add to the cards
inquirer.prompt([
    {
        type: "input",
        message: "Full Text?",
        name: "fulltext"
    }, {
        type: "input",
        message: "Cloze?",
        name: "cloze"
    }, {
        type: "input",
        message: "Partial?",
        name: "partial"
    }
// Tells the program what to do with users input
]).then(function(answers) {
    //create a variable to assign each new card with given answers
    var newCard = new ClozeCard(answers.fulltext, answers.cloze, answers.partial);
    //calls printInfo function for the new flash card
    newCard.printInfo();
});

ClozeCard();
module.exports = ClozeCard;