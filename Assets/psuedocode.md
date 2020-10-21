Password Generator

1. Empty text box <== Append Answer to
2. we click the button <== Call function to execute
3. asks for password length <== Series of confirms, boolean
4. confim true or false for what the user wants to add such as special characters
5. there should be code that uses that information to generate a random string  <== If else, conditionals

---

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters if (prompt => 8 && prompt <= 128;)
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected`
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

---

Create Arrays/Objects for Character Sets

1. Uppercase
2. Lowercase
3. Numbers
4. Special Characters

5. User Choices
   function generatePasswords(){

const passwordLength = prompt("asdslkfjskl");
} 2. Password Length 3. Confirm use numbers 4. confirm use lowercase 5. Confirm user uppercase 6. Confirm use special

var uppercase = ["A","B","C",]
var lowercase = ["a","b","c",]
var uppercase = ["1","2","3"]
var special = ["!","_","@",]

Add these to empty array

*have multile functions, multiple loops, multiple conditionals, array push

Character Length = userDefined = []

if (key[i] === true){
    array.push
}