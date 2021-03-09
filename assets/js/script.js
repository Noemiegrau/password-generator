// characters and number variables
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numeric = '0123456789';
var symbol = '!#$%&()*+,-./:;<=>?@[_^`{|}~]';


//var allChar = [];
//var password = '';
//var passwordText = document.querySelector ("#password");
// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");


function findPasswordOptions() {
  var length = parseInt(
    prompt("How long?")
  );

  if (isNaN(length) === true) {
    alert("please provide a number");
    return;
  }

  if(length<8) {
    alert("password length...")
    return;
  }
  if(length>128) {
    alert("password length...")
    return;
  }

  console.log(length);

  var islowerCase = confirm("Click ok to confirm that password includes lower case");
  var isupperCase = confirm("Click ok to confirm that password includes upper case");
  var isNumeric = confirm("Click ok to confirm that password includes numerics");
  var isSymbol= confirm("Click ok to confirm that password includes symbols ");

  // the differences between == and ===. The == does not check for type, is not a strcit operator. The === will check value and the type. The = is used to define information/ values/ etc.  
  if (
    islowerCase === false &&
    isupperCase === false &&
    isNumeric === false && 
    isSymbol === false
  ) {
  alert("select at least one criteria")
  return;
  }

  //console.log(islowerCase);
  //console.log(isupperCase);
  //console.log(isNumeric);
  //console.log(isSymbol);

  // an example of an object below :) 
  //var object = {
  //  key: "value pairs",
  // key: "value pairs",
  //}

  var passwordObject = {
    length: length,
    islowerCase: islowerCase,
    isupperCase: isupperCase,
    isSymbol: isSymbol,
    isNumeric: isNumeric
  };

  return passwordObject;
}


function getRandomElement(arr) {
  var random = Math.floor(Math.random() * arr.length);
  var randomElement = arr[random];

  return randomElement;
}


function createPassword() {
  var allChar = findPasswordOptions();
  var final = [];
  var possibleChar = [];
  var confirmedChar = [];


  if(allChar.islowerCase) {
    possibleChar = possibleChar.concat(lowerCase);
    confirmedChar.push(getRandomElement(lowerCase));
  }

  if(allChar.isupperCase) {
    possibleChar = possibleChar.concat(upperCase);
    confirmedChar.push(getRandomElement(upperCase));
  }

  if(allChar.isNumeric) {
    possibleChar = possibleChar.concat(numeric);
    confirmedChar.push(getRandomElement(numeric));
  }

  if(allChar.isSymbol) {
    possibleChar = possibleChar.concat(symbol);
    confirmedChar.push(getRandomElement(symbol));
  }

  console.log();

  // need some kind of a for loop to go over the password length from the allChar
  for ( var i = 0; i < allChar; i++) {
  var possibleChar = getRandomElement(possibleChar);
  final.push(possibleChar)
  }
  return final;
}

//console.log(final);

//Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/*function findPasswordLength () {

  // var passwordText = document.querySelector ("#password");

  var passwordLength = 0; 

  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = 0;
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


function generatePassword() {
  var passwordLength = findPasswordLength();
  console.log(passwordLength);

  // function that adds lowerCase
  function lowerCase() {
  var lowerCase = confirm("Would you like your password to contain lowercase letters?");
  var allChar = '';
  // Depending on the response do different things.
  if (lowerCase) {
    allChar += lowerCase();
    allChar.push(lowerCase());
    console.log(allChar);
    return allChar;
  } else {
    return allChar;
  } 
  }
  

  // function that adds upperCase
  function upperCase() {
  var upperCase = confirm("Would you like your password to contain uppercase letters?");
  if (upperCase) {
    allChar += upperCase(); 
    allChar.push(upperCase());
    return allChar;
  } else {
    return allChar;
  }
  }

  // function that adds numeric numbers
  function numeric() {
  var numeric = confirm("Would you like your password to contain numbers?");
  if (numeric) {
    allChar += numeric();
    allChar.push(numeric());
    return allChar;
  } else {
    return allChar;
  }
  }

  // function that adds symbols
  function symbol() {
  var symbol = confirm("Lastly, would you like your password to contain special characters?");
  if (symbol) {
    allChar += symbol();
    allChar.push(symbol());
    return allChar;
  } else {
    return allChar;
  }
  }

  // function that holds possible password characters and combinations
  function findChar() {
    lowerCase();
    console.log(lowerCase());
    upperCase();
    console.log(upperCase());
    numeric();
    console.log(numeric());
    symbol();
    console.log(symbol());

  
    if (allChar = '') {
      window.alert("No password can not be generated if you don't choose to include at least 1 type of characters. Please try again.");
    findChar();
    } else {
    }
  }   

  findChar();

  var allChar = findChar();
  console.log(allChar);

   // Generates password as long as the users chosen length
  while (password < passwordLength) {
    var password = '';
    // Add on a random index from the characterPool string.
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }
  // Return the password that was just made.
  return password;
}
*/

//Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = createPassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
