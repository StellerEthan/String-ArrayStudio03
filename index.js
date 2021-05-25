let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//a) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

food.split(',').sort();
equipment.split(',').sort();
pets.split(',').sort();
sleepAids.split(',').sort();
console.log(food, equipment, pets, sleepAids);


//b) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold = [];

cargoHold.push(food.split(',').sort(), equipment.split(',').sort(), pets.split(',').sort(), sleepAids.split(',').sort());

console.log(cargoHold);

//c) Query the user to select a cabinet (0 - 3) in the cargoHold.

let input = require('readline-sync');
let userCabinet = input.question('Select a cabinet (0 - 3) in the cargoHold: ')

//d) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

if (userCabinet <= 3 && userCabinet >0 ){
    console.log(`Cabinet Contents: ${cargoHold[userCabinet]}`);
}else {
    console.log("Invalid Cabinet");
}




//e) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

let item = input.question("What Item to check for? ")
if (cargoHold[userCabinet].includes(item) === true){
    console.log(`Cabinet ${userCabinet} DOES contain ${item}`)
}else{
    console.log(`Cabinet ${userCabinet} DOES NOT contain ${item}.`)
}


