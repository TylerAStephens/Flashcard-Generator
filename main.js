// Connects to BasicCard.js
var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");
var inquirer = require('inquirer');


// var to keep track of how many cards have been made
var count = 0;
// array to hold cards made
var cardArray = [];
    
// Created function for user to pick which type of card they would like to make
var PickACard = function() {
    inquirer.prompt([
        {
            type: "list",
            message: "Which kind of flash card?",
            choices: ["Basic", "Cloze"],
            name: "leCard"
          },
    ]).then(function(answers) {
        // If they choose Basic it will run makeBasicCards
            if(answers.leCard == "Basic"){
                makeBasicCards();
         // If they choose Cloze it will run makeClozeCards
            } else if(answers.leCard == "Cloze"){
                makeClozeCards();
            }

});

} // End of PickACard function

// made a make card function for Basic Cards
var makeBasicCards = function() {

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
   makeBasicCards();
});

// If all new cards are made (count = 5)
}else{
    // For loop for putting all objects added to array in line
    for (var x = 0; x < cardArray.length; x++) {
        // Print array info
        cardArray[x].printInfo();
    }
}

}; //ending makeBasicCard function

// made a make card function for Cloze cards
var makeClozeCards = function() {
    
// If statement to cap number of cards to 5
     if (count < 5) {
        console.log("New Card");

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
    //adds each new card to the cardArray holding all of the users input
    cardArray.push(newCard);
    //add to the count
    count++;
    //runs prompt again
    makeClozeCards();
 });


    // If all new cards are made (count = 5)
    }else{
        // For loop for putting all objects added to array in line
        for (var x = 0; x < cardArray.length; x++) {
            // Print array info
            cardArray[x].printInfo();
        }
    }
    
    }; //ending makeClozecard function



// Runs make cards function
//makeBasicCards();
//makeClozeCards();
PickACard();