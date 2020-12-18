// function checkLength() {
//   var length = prompt("How long would you like your password to be? Between 8 and 128 characters.");
//   if(length < 8 || length > 128) {
//     alert("Please select a password length between 8 and 128 characters.");
//     checkLength();
//   } else {
//     promptUser();
//   }
// }


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


// Create object with password characters in it

var passwordChars = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  specialChars: "£$%^&*<>@+=(){}[]"
};


// Write a function to generate the password

function generatePass(lower, upper, num, spclC, length) {
  // Let keyword ensures the 2 variables declared have limited scope
  let main = "";
  let finalPassword = "";

  // Values passed into this object are used in the generatePass function
  // The values are those declared in the passwordChars object on ln 29
  var passOptions = {
    lowerCase: lower,
    upperCase: upper,
    numbers: num,
    specialChars: spclC
  };

  // The first part of this for loop states that i should be 0 & if i 
  // is less than the length of all the string items contained in passOptions
  // then iterate i 
  for(i = 0; i < Object.keys(passOptions).length; i++) {
    // This is a ternary operator that has been assigned to the main variable via +=
    // If object.values(passOptions) is true then passwordChars[Object.keys(passOptions)[i]] runs
    // Otherwise it returns an empty string
    main += (Object.values(passOptions)[i]) ? passwordChars[Object.keys(passOptions)[i]] : "";
  }
  // This if statement states that if main is not empty & the length is less than 0
  // Then do something
  if(main != "" && length > 0) {
    // The something mentioned above is this for loop
    // i is set to 0 & if i is less than the input length, we increment
    for(i = 0; i < length; i++) {
      // As it iterates the finalPassword variable is being assigned 
      // main[Math.floor(Math.random() * main.length)]
      finalPassword += main[Math.floor(Math.random() * main.length)];
    }

    // The finalPassword variable is being written to the HTML element with
    // the id of password
    document.querySelector("#password").value = finalPassword;
  } 

  // This if statement calls back to promptUser if they declared a number <length or >length
  // Also displays a message telling the user to enter a number between 8 and 128
  if(length < 8 || length > 128) {
    alert("Please enter a number from 8 - 128.");
    promptUser();
  }

}
