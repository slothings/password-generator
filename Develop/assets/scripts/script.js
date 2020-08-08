// Assignment Code

var generateBtn = document.querySelector("#generate");

// Setting up variables, .split lets me break the whole string into smaller separate string (https://www.w3schools.com/jsref/jsref_split.asp)

var characterUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var characterUpperArray = characterUpper.split("");

var characterLower = "abcdefghijklmnopqrstuvwxyz";
var characterLowerArray = characterLower.split("");

var number = "0123456789";
var numberArray = number.split("");

var specialCharacter = "`~!@#$%^&*()-_=+[{]};:',<.>/?";
var specialCharacterArray = specialCharacter.split("");

// Function to generate password

function writePassword() {

  // Variables to collect user input, I used "" in resultPassword so it returns the characters individually for character count

  var allCharacters = [];
  var resultPassword = "";
  var TotalPasswordLength = prompt("How many characters would you like your password to be?");

  if (TotalPasswordLength < 8 || TotalPasswordLength > 128) {
    alert("Your password must be between 8-128 characters!")
  }

  // Conditions for password, Array.prototype.push.apply lets me add the content of multiple arrays into one array (https://www.w3schools.com/jsref/jsref_prototype_array.asp) (https://www.w3schools.com/jsref/jsref_push.asp)

  else {

    if (confirm("Do you want your password to have uppercase letters?")) {
      Array.prototype.push.apply(allCharacters, characterUpperArray);
    }

    if (confirm("Do you want your password to have lowercase letters?")) {
      Array.prototype.push.apply(allCharacters, characterLowerArray);
    }

    if (confirm("Do you want your password to have numbers?")) {
      Array.prototype.push.apply(allCharacters, numberArray);
    }

    if (confirm("Do you want your password to have special characters?")) {
      Array.prototype.push.apply(allCharacters, specialCharacterArray);
    }

    if (allCharacters.length === 0) {
      alert("You must select at least 1 constraint for your password")
    }

    //Run loop with selected constraints

    else {

      for (var i = 0; i < TotalPasswordLength; i++) {
        var random = Math.floor(Math.random() * allCharacters.length);
        resultPassword += allCharacters[random];
      }
    }
  }

  document.getElementById("password").innerHTML = resultPassword;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);