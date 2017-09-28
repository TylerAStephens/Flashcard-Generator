// Install inquirer to allow user input
var inquirer = require('inquirer');
// Made constructor function to create basic card objects with front and back
function BasicCard(front,back) {
    this.front = front;
    this.back = back;
    //Made print info function to console log front and back
    this.printInfo = function() {
        console.log("Front: " + this.front, "Back: " + this.back);
        // added line to clean up node log
        console.log("---------------");        
    };
}
// var to keep track of how many cards have been made
var count = 0;
// array to hold cards made
var cardArray = [];

// made a make card function to run the prompt and know when to stop
var makeCards = function() {
    // If statement to cap number of cards to 5
    if (count < 5) {
        console.log("New Card");
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
   //adds each new card to the cardArray holding all of the users input
   cardArray.push(newCard);
   //add to the count
   count++;
   //runs prompt again
   makeCards();
});
// If all new cards are made
}else{
    // For loop for putting all objects added to array in line
    for (var x = 0; x < cardArray.length; x++) {
        // Print array info
        cardArray[x].printInfo();
    }
}

}; //ending make card function

// Run make cards function
makeCards();