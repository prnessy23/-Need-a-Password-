// Assignment Code
var generateBtn = document.querySelector("#generate");
// Creating arrays from which to draw on
function generatePassword() {
  var uppercaseArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var lowercaseArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var characterArray = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "+",
    "=",
  ];

  console.log(uppercaseArray[8]);

  var resultArray = [];
  var userArray = [];

  var numbCharacter = prompt("Number of characters you want between 8 and 128");

  // Added while function to force user to choose between 8-128 characters and reminding them that they must

  while (numbCharacter < 8 || numbCharacter > 128) {
    alert("You must be between 8 and 128");
    numbCharacter = prompt("Number of characters you want between 8 and 128");
  }

  var wantsUppercase = confirm("Do you want Uppercases in your password");
  var wantsLowercase = confirm("Do you want lower cases in your password");
  var wantsNumbers = confirm("Do you want numbers in your password");
  var wantsSpecial = confirm("Do you want special characters in your password");

    // Added while function to prevent user from choosing Cancel of every available option and forcing password to contain at least on of the arrays

  while (!uppercaseArray && !lowercaseArray && !numberArray && !characterArray) {
    alert("you must choose at least one type of character")
    wantsUppercase = confirm("Do you want Uppercases in your password");
    wantsLowercase = confirm("Do you want lower cases in your password");
    wantsNumbers = confirm("Do you want numbers in your password");
    wantsSpecial = confirm("Do you want special characters in your");
  };

  //Condiitons for query to follow;

  if (wantsUppercase) {
    resultArray = resultArray.concat(uppercaseArray);
  }
  if (wantsLowercase) {
    resultArray = resultArray.concat(lowercaseArray);
  }
  if (wantsSpecial) {
    resultArray = resultArray.concat(characterArray);
  }
  if (wantsNumbers) {
    resultArray = resultArray.concat(numberArray);
  }

  for (var i = 0; i < numbCharacter; i++) {
    userArray += resultArray[Math.floor(Math.random() * resultArray.length)]
  }

  return userArray;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function copytoClipboard() {
  // Bonus
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
