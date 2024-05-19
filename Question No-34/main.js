//QUESTION NO:34
//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use
//a for loop to print the name of each pizza.
//ANSWER...
let favorite_pizzas = ['Pepperoni', 'Margherita', 'BBQ Chicken'];
// Print the name of each pizza
console.log("Printing pizza names:");
for (let pizza of favorite_pizzas) {
    console.log(pizza);
}
// Print a sentence using the name of each pizza
console.log("\nPrinting sentences:");
for (let pizza of favorite_pizzas) {
    console.log(`I like ${pizza} pizza.`);
}
// Print a statement about how much you like pizza
console.log("\nI really love pizza!");
export {};
