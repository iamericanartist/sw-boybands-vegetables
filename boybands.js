var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

var loopCount = vegetables.length; 	// The number of loops to perform (what if the array changes?)

var currentBand = "";   	// Keep track of which band we're on in the loop
var currentVeggie = "";   // Keep track of which veggie we're on in the loop

var bandElement = document.getElementById("boy-bands"); 		// Get a reference to the appropriate DOM element for bands
var veggieElement = document.getElementById("vegetables"); 	// Get a reference to the appropriate DOM element for vegetables

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
  currentBand = bands[loopTracker];   // Add the band names into the correct <div>
  currentVeggie = vegetables[loopTracker];   // Add the veggie names into the correct <div>

bandElement.innerHTML += `<div>${currentBand}</div>`;
veggieElement.innerHTML += `<div>${currentVeggie}</div>`;
	
console.log("I like ", currentBand);
console.log("I like ", currentVeggie);

}