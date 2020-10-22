// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var passwordWord = " ";
// // I want all of my variables here

//All of my variables for my functions to access
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
let number = [0,1,2,3,4,5,6,7,8,9];
let special = [".","!","@","#","$","%","^","&","*","(",")","_","+","-","="];


function writePassword() {
  var passwordWord = "";
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

  function generatePassword(){
    const passwordLength = prompt("Please input how long you want your password to be, from 8 to 128 characters. Input only a number!");
    if (!(passwordWord.length < passwordLength && 8 <= passwordLength && passwordLength <= 128)){
      alert("Please select ONLY characters between 8 and 128, thank you!");
      return;
    }
        // All of my prompts and confirmations for boolean values
    
    let userChoices = []
    let wantUpperCase = confirm("Do you want UpperCase Letters in your password?");
    let wantLowerCase = confirm("Do you want LowerCase Letters in your password?");
    let wantNumber = confirm("Do you want Numbers in your password?");
    let wantSpecial = confirm("Do you want Special Letters in your password?");
        
    for  (let i = 0; (passwordWord.length < passwordLength && 8 <= passwordLength && passwordLength <= 128); i++){
      let randomUpper = Math.floor(Math.random() * upperCase.length);
      let upperIndex = upperCase[randomUpper];

      let randomLower = Math.floor(Math.random() * lowerCase.length);
      let lowerIndex = lowerCase[randomLower];

      let randomNumber = Math.floor(Math.random() * number.length);
      let numberIndex = number[randomNumber];

      let randomSpecial = Math.floor(Math.random() * special.length);
      let specialIndex = special[randomSpecial];

      if (wantUpperCase) {
        userChoices.push(upperIndex);
      }

      if (wantLowerCase) {
        userChoices.push(lowerIndex);
      }

      if (wantNumber) {
        userChoices.push(numberIndex);
      }

      if (wantSpecial) {
        userChoices.push(specialIndex);
      }
      

      randomMix = Math.floor(Math.random() * userChoices.length);
      randomIndex = userChoices[randomMix];

      passwordWord = randomIndex + passwordWord;
      console.log(passwordWord);
       }

       return passwordWord;
       

  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
