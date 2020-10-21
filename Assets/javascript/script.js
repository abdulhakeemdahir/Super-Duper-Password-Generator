// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword(){
  // I want all of my variables here
  const passwordLength = prompt("Please input how long you want your password to be, from 8 to 128 characters. Input only a number!");
  const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
  const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
  const number = [0,1,2,3,4,5,6,7,8,9]
  const special = [".","!","@","#","$","%","^","&","*","(",")","_","+","-","="]

  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
