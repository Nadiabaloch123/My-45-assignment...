//QUESTION NO:42
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()...ETC

//ANSWER...
let magicians : string[] = ['Harry Potter', 'Hermione Granger', 'Ron Weasley','Albus Dumbledore'];

function make_great ( magiciansArry:string[] ){

    for(let i=0; i<magiciansArry.length; i++){
      
      magicians[i] = 'the Great ' + magiciansArry[i]
    }

}



function show_magicians(magicians: string[]){
magicians.forEach(element => {
        console.log(element);
    });
}

make_great(magicians);

show_magicians(magicians);