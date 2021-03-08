// characters and number variables
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialCharacters = [' ', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '_', '^', '`', '{', '|', '}', '~', '"', ']'];



// function that generates password length
function generatePasswordLength() {

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


// function that concatenate characters and generates password 
  var lowerCase = confirm("Would you like your password to contain lowercase letters?");
  var upperCase = confirm("Would you like your password to contain uppercase letters?");
  var numeric = confirm("Would you like your password to contain numbers?");
  var specialCharacters = confirm("Lastly, would you like your password to contain special characters?");









// function that generates password
function generatePassword() {

  var passLength = passwordLength();

}








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
