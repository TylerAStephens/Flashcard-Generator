// Install inquirer to allow user input
var inquirer = require('inquirer');
// Made constructor function to create basic card objects with front and back
function BasicCard(front,back) {
    this.front = front;
    this.back = back;
    //Made print info function to console log front and back
    this.printInfo = function() {
        console.log("Front: " + this.front, "Back: " + this.back);
    };
}
// used inquirer prompt to ask the user for input to add to the cards
inquirer.prompt([
    {
        type: "input",
        message: "What will the front say?",
        name: "front"
    }, {
        type: "input",
        message: "What will the back say?",
        name: "back"
    }
// Tells the program what to do with users input
]).then(function(answers) {
    //create a variable to assign each new card with given answers
    var newCard = new BasicCard(answers.front, answers.back);
    //calls printInfo function for the new flash card
    newCard.printInfo();
});