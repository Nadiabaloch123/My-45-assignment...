//QUESTION NO:19
//Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner.
//ANSWER...
let guest_List = ["Hafsa", "Aqsa", "Maryam", "Rafia"];
let not_Present = "Azka";
let new_Guest = "Maryam";
guest_List[0] = new_Guest;
guest_List.unshift("Maham", "Rafia", "Afia");
while (guest_List.length > 2) {
    let remove_Guest = guest_List.pop();
    guest_List.splice(0, 2);
    console.log(guest_List);
    console.log(`Total num of guest are: ${guest_List.length}`);
}
export {};
