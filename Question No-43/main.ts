//QUEUnchanged Magicians: STION NO:43
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()

//ANSWER...


let magicians : string[] = ['Harry Potter', 'Hermione Granger', 'Ron Weasley','Albus Dumbledore'];

function copyArry(arr:string[]){
   return [...arr]
}

function make_great ( magiciansArry:string[] ){

    for(let i=0; i<magiciansArry.length; i++){
      
      magiciansArry[i] = 'the Great ' + magiciansArry[i]
    }

}



function show_magicians(magicians: string[]){
magicians.forEach(element => {
        console.log(element);
    });
}

const copyMagicianArry = copyArry(magicians)

make_great(copyMagicianArry);

console.log('\n\nThis is my orginal Arry:');

show_magicians(magicians);


console.log('\n\nThis is my modified copy of the Arry:');

show_magicians(copyMagicianArry);