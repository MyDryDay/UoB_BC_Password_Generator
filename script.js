const generateBtn = document.querySelector('#generate');
const passChars = {
    lowerCase: 'abcdefghijklmnopqrstuvwxyz',
    upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    specialChars: '!#$%&()*+,-./:;<=>?@[]^_{|}~',
};

generatePass = (len, lower, upper, num, char) => {

    // Variables to store the final password, and the string of characters used to generate it
    let finalPass = '';
    let randCharStr = '';

    // Object to store the boolean values for the password options
    let passOptions = {
        lowerCase: lower,
        upperCase: upper,
        numbers: num,
        specialChars: char
    };

    // Loops through the keys of passOptions
    for (let i = 0; i < Object.keys(passOptions).length; i++) {
        // If the key value of passOptions is true at index i, add the value of passChars at index i to randCharStr
        randCharStr += Object.values(passOptions)[i] ? passChars[Object.keys(passOptions)[i]] : '';
    }

    if (randCharStr != '' && parseInt(len) > 0) {
        // Loop through randCharStr, picking random indexes and appending them to finalPass
        for (let i = 0; i < parseInt(len); i++) {
            finalPass += randCharStr[Math.floor(Math.random() * randCharStr.length)];
        }
    }

    // Set the value of the '#password' textarea to the finalPass value
    document.querySelector('#password').value = finalPass;
};

generateBtn.addEventListener('click', () => {

    // Capture the values provided by the user
    let chars = document.querySelector('#passSym').checked;
    let length = document.querySelector('#passLength').value;
    let lowerCase = document.querySelector('#passLower').checked;
    let numbers = document.querySelector('#passNum').checked;
    let upperCase = document.querySelector('#passUpper').checked;

    // Call the generatePass function, passing in the captured values to use in the function
    generatePass(length, lowerCase, upperCase, numbers, chars);
});
