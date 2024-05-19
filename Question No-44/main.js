//QUESTION NO:44
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich...ETC
//ANSWER...
function makeSandwich(item) {
    console.log('\nMaking your Sandwich with');
    item.forEach(Element => console.log("_" + Element));
    console.log('Enjoy your Sandwich !\n');
}
makeSandwich(['Ham', 'Cheese', 'Lettuce']);
makeSandwich(['turkey', 'Bacon',]);
makeSandwich(['Butter', 'jelly',]);
export {};
