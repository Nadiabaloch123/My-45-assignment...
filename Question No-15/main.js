//QUESTION NO:15
//Changing Guest List: You just heard that one of your guests can’t make the dinner,
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//ANSWER...
let guestList = ["Hafsa", "Aqsa", "Azka"];
let unableToAttend = "Azka";
let newInvitee = "Maryam";
guestList = guestList.filter(person => person !== unableToAttend);
guestList.push(newInvitee);
guestList.forEach(person => {
    console.log(`Dear ${person},\nYou are cordially invited to dinner. It would be an honor to have you join us.`);
});
export {};
