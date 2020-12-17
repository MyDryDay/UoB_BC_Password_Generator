// User prompts to gather info on what kind of password they'd like
// Calls the generatePass function at the end

function promptUser() {
  var length = prompt("How long would you like your password to be? Between 8 and 128 characters.");
  var lower = confirm("Would you like lower case letters?");
  var upper = confirm("Would you like upper case letters?"); 
  var num = confirm("Would you like numbers?");
  var sym = confirm("Would you like symbols?");

  generatePass(lower, upper, num, sym, length);
}


// Assigns generateBtn variable to an HTML object
// Makes it quicker to target the element

var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
// Upon clicking the promptUser function will be called

generateBtn.addEventListener("click", promptUser);
