//QUESTION NO:17
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner
//and you have space for only two guests.

//ANSWER...
let guestList: string[] = ["Hafsa", "Aqsa", "Maryam", "Rafia", "Afia"];

console.log("Unfortunately, the new dinner table won't arrive in time, so I can only invite two people for dinner.");

while (guestList.length > 2) {
    let removedGuest: string = guestList.pop()!;
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}


guestList.forEach(person => {
    console.log(`Dear ${person},\nYou are still invited to dinner.`);
});


guestList.pop();
guestList.pop();

console.log("Updated guest list:", guestList);
