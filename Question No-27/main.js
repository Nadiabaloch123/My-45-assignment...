//QUESTION NO:27
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// If the alien is green, print a message that the player earned 5 points.
//If the alien is yellow, print a message that the player earned 10 points.
// If the alien is red, print a message that the player earned 15 points.
// Write three versions of this program, making sure each message is printed for the appropriate color alien.
//ANSWER...
let alienColor = "green";
//version 1
if (alienColor === "green") {
    console.log("Player earned 5 point.");
}
else if (alienColor === "yellow") {
    console.log("Player earned 10 points");
}
else if (alienColor === "red") {
    console.log("the player earned 15 points");
}
else {
    console.log("please select right color");
}
// version 2
alienColor = "yellow";
if (alienColor === "green") {
    console.log("Player earned 5 point.");
}
else if (alienColor === "yellow") {
    console.log("Player earned 10 points");
}
else if (alienColor === "red") {
    console.log("the player earned 15 points");
}
else {
    console.log("please select right color");
}
// version 3
alienColor = "red";
if (alienColor === "green") {
    console.log("Player earned 5 point.");
}
else if (alienColor === "yellow") {
    console.log("Player earned 10 points");
}
else if (alienColor === "red") {
    console.log("the player earned 15 points");
}
else {
    console.log("please select right color");
}
export {};
