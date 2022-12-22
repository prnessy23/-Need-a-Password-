// Assignment Code
var generateBtn = document.querySelector("#generate");
// Creating arrays from which to draw on
function generatePassword ()




  var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J",
"K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 var lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 var numberArray = ["0","1","2","3","4","5","6","7","8","9"];
 var characterArray =["!","@","#","$","%","^","&","*","(",")","-","_","+","="];

 var resultArray = [];
 var userArray = [];

 uppercaseArray [1]
 var numbCharacter = prompt ("Number of characters you want between 8 and 128");
 var uppercaseArray = confirm ("Do you want Uppercases in your password");
 var lowercaseArray = confirm ("Do you want lower cases in your password");
 var numberArray = confirm ("Do you want numbers in your password");
 var characterArray = confirm ("Do you want special characters in your password");

 //Condiitons for query to follow;

 if (numbers){
  resultArray =resultArray.concat(numberArray);
 }
 if (uppercaseArray){
  resultArray =resultArray.concat(uppercaseArray);
 }
 if (lowercaseArray){ resultArray =resultArray.concat(lowercaseArray)};
 if (characterArray){resultArray = resultArray(characterArray)};

 console.log(resultArray)

 for (var i = 0; i < numbCharacter; i++) {
  userArray.push (resultArray)[Math.floor(Math.random() * resultArray.length)]}

  return userArray.join('');

  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function copytoClipboard(){
  // Bonus
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}
