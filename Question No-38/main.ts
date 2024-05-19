//QUESTION NO:38
//Cities: Write a function called describe_city() that accepts the name of a city and its country...etc

//ANSWER...
function describe_city(city: string, country: string = 'Unknown'): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city('Karachi', 'Pakistan');
describe_city('Delhi', 'India');
describe_city('Seoul'); // Using default country 'Unknown'
