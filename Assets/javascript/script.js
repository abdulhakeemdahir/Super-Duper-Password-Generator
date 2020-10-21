// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var passwordWord = " ";
// // I want all of my variables here

// // All of my prompts and confirmations for boolean values
// const wantUpperCase = confirm("Do you want UpperCase Letters in your password?");
// const wantLowerCase = confirm("Do you want LowerCase Letters in your password?");
// const wantNumber = confirm("Do you want Numbers in your password?");
// const wantSpecial = confirm("Do you want Special Letters in your password?");

//All of my variables for my functions to access
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
let number = [0,1,2,3,4,5,6,7,8,9];
let special = [".","!","@","#","$","%","^","&","*","(",")","_","+","-","="];



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  const passwordLength = prompt("Please input how long you want your password to be, from 8 to 128 characters. Input only a number!");

  while(passwordWord.length < passwordLength && 8 <= passwordLength && passwordLength <= 128){
    randomUpper = Math.floor(Math.random() * upperCase.length);
    upperIndex = upperCase[randomUpper];
    randomLower = Math.floor(Math.random() * lowerCase.length);
    lowerIndex = lowerCase[randomLower];
    randomNumber = Math.floor(Math.random() * number.length);
    numberIndex = number[randomNumber];
    randomSpecial = Math.floor(Math.random() * special.length);
    specialIndex = special[randomSpecial];
    randomArray = [upperIndex, lowerIndex, numberIndex, specialIndex];
    randomMix = Math.floor(Math.random() * randomArray.length);
    randomIndex = randomArray[randomMix];
    passwordWord = randomIndex + passwordWord;
    console.log(passwordWord);
     }
  // numberIndex = number[randomNumber];
  



  function generatePassword(){



  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
