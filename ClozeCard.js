//console.log("CC is connected");
// Made constructor function to create cloze card objects with full text, cloze, and partial
function ClozeCard(fulltext, cloze, partial) {
    this.fulltext = fulltext;
    this.cloze = cloze;
    this.partial = partial;
  
    //Made print info function to console log front and back
    this.printInfo = function() {
        console.log("Full: " + this.fulltext, "Cloze: " + this.cloze, "Partial: " + this.partial);
        // added line to clean up node log
        console.log("---------------");   
    };
}
//ClozeCard();
module.exports = ClozeCard;


