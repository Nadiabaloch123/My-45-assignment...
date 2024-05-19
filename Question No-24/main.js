//QUESTION NO:24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// Tests for equality and inequality with strings
// Tests using the lower case function
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// Tests using "and" and "or" operators
// Test whether an item is in a array
// Test whether an item is not in a array
//ANSWER...
let car = "subaru";
let age = 25;
let numbers = [1, 2, 3, 4,];
// Test 1 Equakity (false)
console.log("Is car == 'subaru' ? I predict True.");
console.log(car == 'subaru'); // True (case insensitive)
//  Test 2 Strict equality
console.log("Is car === 'subaru' ? I predict False.");
console.log(car === 'subaru'); // false (case insensitive)
//  3rd test  Inequality
console.log("Is car != 'Toyota'? I predict true.");
console.log(car != 'toyota'); //true
// test 4 inequality (false)
console.log("Is car !== 'subaru' ? I predict false.");
console.log(car !== 'subaru'); //false
//test 5 Lowercase function
console.log("Is car.LowerCase() == 'subaru' ? I predict True.");
console.log(car.toLocaleLowerCase() == 'subaru'); //true loweCase
// test 6
console.log("Is car === car.LowerCase() ? I predict false.");
console.log(car === car.toLocaleLowerCase()); //false upperCase
//  Numerical tests
//  7 Equality (true)
console.log("Is age == 25 ? I predict true");
console.log(age == 25); //true
//  test 8 inequality false
console.log("Is age != 25 ? I predict false");
console.log(age != 25); //false
// test 9 Greater than (false)
console.log("Is age > 30 ? I predict");
console.log(age > 30); //false
// test 10 Less than or equal (true)
console.log("Is age <= 25 ? I predict True");
console.log(age <= 25); //true
export {};
