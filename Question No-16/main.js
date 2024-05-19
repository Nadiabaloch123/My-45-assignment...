//QUESTION NO:16
//More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.
//ANSWER...
let additionalGuests = ["Maham", "Rafia", "Afia"];
let guestList = ["Hafsa", "Aqsa", "Maryam", ...additionalGuests];
guestList.forEach(person => {
    console.log(`Dear ${person},\nYou are cordially invited to dinner. It would be an honor to have you join us.`);
});
export {};
