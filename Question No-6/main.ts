//QUESTION NO:6
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
//Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
//so the whitespace around the name is displayed. Then print the name after striping the white spaces.

//ANSWER...
const StrippingNames : string = " \t\n Nadia \t\n";//save name with whitespace
console.log(`Name with spaces: ${StrippingNames}`);//before the whitesspace
console.log(`Stripped Name: ${StrippingNames.trim()}`);//after

