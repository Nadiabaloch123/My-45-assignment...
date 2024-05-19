//QUESTION NO:23
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction
//for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//ANSWER...
let car = 'subaru';
// Test 1 (True)
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');
// Test 2 (True)
console.log("Is car.startsWith('su')? I predict True.");
console.log(car.startsWith('su'));
// Test 3 (True)
console.log("Is car.length < 10? I predict True.");
console.log(car.length < 10);
// Test 4 (True)
console.log("Is car.includes('ba')? I predict True.");
console.log(car.includes('ba'));
// Test 5 (True)
console.log("Is car.toUpperCase() === 'SUBARU'? I predict True.");
console.log(car.toUpperCase() === 'SUBARU');
// Test 6 (False)
console.log("Is car === 'saharu'? I predict False.");
console.log(car === 'saharu');
// Test 7 (False)
console.log("Is car.endsWith('u')? I predict False.");
console.log(car.endsWith('u'));
// Test 8 (False)
console.log("Is car === 'Toyota'? I predict False.");
console.log(car === 'Toyota');
// Test 9 (False)
console.log("Is car.length > 5? I predict False.");
console.log(car.length > 5);
// Test 10 (False)
console.log("Is car.includes('xx')? I predict False.");
console.log(car.includes('xx'));
export {};
