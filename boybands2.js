var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
var loops = vegetables.length;
var theCurrentBand = "";
var theCurrentVeggie = "";


var bandz = document.getElementById("boy-bands"); //Defined beforehand or in the for loop is up to you
var veggiez = document.getElementById("vegetables"); // defined IN THE LOOP will only be available there however

for (var i = 0; i <loops; i++) {
	theCurrentBand = bands[i];
	theCurrentVeggie = vegetables[i];
	bandz.innerHTML += `<div> ${theCurrentBand} </div>` // WHILE INSIDE THE LOOP CAN RETURN ALL VARIABLES
	veggiez.innerHTML += `<div>${theCurrentVeggie}</div>` // WHILE INSIDE THE LOOP CAN RETURN ALL VARIABLES

}
// WHILE OUTSIDE THE LOOP only returns LAST Variable
	bandz.innerHTML += `<div> ${theCurrentBand} </div>` 
	veggiez.innerHTML += `<div>${theCurrentVeggie}</div>`






// var loopCount = vegetables.length; 	// The number of loops to perform (what if the array changes?)
// var currentBand = "";   	// Keep track of which band we're on in the loop
// var currentVeggie = "";   // Keep track of which veggie we're on in the loop
// var bandElement = document.getElementById("boy-bands"); 		// Get a reference to the appropriate DOM element for bands
// var veggieElement = document.getElementById("vegetables"); 	// Get a reference to the appropriate DOM element for vegetables


// Start looping
// for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
//   currentBand = bands[loopTracker];   // Add the band names into the correct <div>
//   currentVeggie = vegetables[loopTracker];   // Add the veggie names into the correct <div>

// bandElement.innerHTML += `<div>${currentBand}</div>`;
// veggieElement.innerHTML += `<div>${currentVeggie}</div>`;
	
// console.log("I like ", currentBand);
// console.log("I like ", currentVeggie);

// }



// var divs = document.querySelector("divs")  //or (".container") or ("#asdf") THE FIRST ONE 
// var divs = document.querySelectorAll("divs")  //or (".container") or ("#asdf")  ALL OF THEM
// // these create an ARRAY not an HTMLCollection as is above...
	
// var secret = prompt("What is the secret password?");
// var password = "sesame";
// var attempts = 0;

// while (secret !== password){
//   secret = prompt("What is the secret password?");
//   attempts += 1;
// }

// document.write("You know the secret password. Welcome.");
// document.write("You took " + attempts + " attempts to get the right password");