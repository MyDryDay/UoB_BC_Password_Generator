function checkLength() {
  var length = prompt("How long would you like your password to be? Between 8 and 128 characters.");
  if(length < 8 || length > 128) {
    alert("Please select a password length between 8 and 128 characters.");
    checkLength();
  } else {
    promptUser(length);
  }
}



function promptUser(length) {
  // var length = prompt("How long would you like your password to be? Between 8 and 128 characters.");
  var lower = confirm("Would you like lower case letters?");
  var upper = confirm("Would you like upper case letters?"); 
  var num = confirm("Would you like numbers?");
  var sym = confirm("Would you like symbols?");


  generatePass(lower, upper, num, sym, length);
  console.log("promptUser works");
}



var generateBtn = document.querySelector("#generate");



generateBtn.addEventListener("click", checkLength);



var passwordChars = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  specialChars: "£$%^&*<>@+=(){}[]"
};



function generatePass(lower, upper, num, spclC, length) {
  console.log("We got this far.");
  let availableSets = [];
  let finalPassword = "";

  var passOptions = {
    lowerCase: lower,
    upperCase: upper,
    numbers: num,
    specialChars: spclC
  };

  console.log(passOptions);

  for(i = 0; i < Object.keys(passOptions).length; i++) {
    if(Object.values(passOptions)[i] === true) {
      availableSets.push(passwordChars[Object.keys(passOptions)[i]]);
    }
  }


  if(availableSets != [] && length > 0) {
    for(i = 0; i < length; i++) {
      var characters = Object.values(availableSets)[i];
      console.log(characters);
      finalPassword += characters[Math.floor(Math.random() * )];
      // console.log(Object.values(availableSets)[i]);
      // finalPassword += Object.values(availableSets[Math.floor(Math.random() * length)]);
      // finalPassword += availableSets[Math.floor(Math.random() * availableSets.length)];
    } 
    document.querySelector("#password").value = finalPassword;
  } 

}