//console.log("BC connected");
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

//exports BasicCard
module.exports = BasicCard;
