//QUESTION NO:14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
//Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.

//ANSWER...
let guestList: string[] = ["Hafsa", "Aqsa", "Azka"];
guestList.forEach(person => {
    console.log(`Dear ${person},\nYou are cordially invited to dinner. It would be an honor to have you join us.`);
});
