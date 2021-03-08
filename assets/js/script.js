// mes variables
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialCharacters = [' ', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '_', '^', '`', '{', '|', '}', '~', '"', ']'];



// ma fonction qui cree le password
function generatePassword() {

// length of password code
  var passwordLength = 0; 

  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = parseInt(prompt("How long would you like your password to be? Please enter a number between 8 and 128 characters included."));
  
    if (passwordLength < 8) {
      window.alert("You chose a password length smaller than 8 characters. Please enter a number between 8 and 128 characters included.");

    } else if (passwordLength > 128) {
      window.alert("You chose a password length greater than 128 characters. Please enter a number between 8 and 128 characters included.");

    } else if (isNaN(passwordLength)) {
      window.alert("You entered an invalid password length. Please enter a number between 8 and 128 characters included.");

    } else {
    window.alert("You chose " + passwordLength + " characters for your password.");
    }
  }
  return passwordLength;
}








// character type code













// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
