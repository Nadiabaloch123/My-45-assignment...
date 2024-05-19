//QUESTION NO:35
//Animals: Think of at least three different animals that have a common characteristic.etc
//ANSWER...
let animals = ['Dog', 'Cat', 'Rabbit'];
// Print the name of each animal
console.log("Printing animal names:");
for (let animal of animals) {
    console.log(animal);
}
// Print a statement about each animal
console.log("\nPrinting statements about each animal:");
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}
// Print a statement about what these animals have in common
console.log("\nAny of these animals would make a great pet!");
export {};
