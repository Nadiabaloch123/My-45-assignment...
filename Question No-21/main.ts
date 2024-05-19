//QUESTION NO:21
//They think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items.

//ANSWER...
interface item {
    name:string,
    price:number,
}
// create two objects
const book : item = {
    name : "Essential Typesscript",
    price : 500
} 
const fourites : item = {
    name : "Apple",
    price : 300
}
console.log(`book name : ${book.name}, price ${book.price}`);
console.log(`apple name : ${fourites.name}, price ${fourites.price}`);