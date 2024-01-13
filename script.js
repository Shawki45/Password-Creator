// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = [1,2,3,4,5,6,7,8,9,0]
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}
function generatePassword() {
    var allCharacters = []
    var length = window.prompt("How many characters would you like it to be?")
    var retVal = ""
    var upppercaseConfirm = window.confirm("Would you like uppercase characters?")
    if(upppercaseConfirm == true){
        allCharacters = allCharacters.concat(uppercaseCharacters)
        console.log(allCharacters)
    }
    var lowercaseConfirm = window.confirm("Would you like lowercase characters")
    if(lowercaseConfirm == true){
        allCharacters = allCharacters.concat(lowercaseCharacters)
        console.log(allCharacters)
    }
    var numbersConfirm = window.confirm("Would you like numbers?")
    if(numbersConfirm == true){
        allCharacters = allCharacters.concat(numbers)
        console.log(allCharacters)

    }
    var specialCharactersConfirm = window.confirm("Would you like special characters?")
    if(specialCharactersConfirm == true)
        allCharacters = allCharacters.concat(specialCharacters)
        console.log(allCharacters)
    for (var i = 0;  i < length; ++i) {
        retVal += allCharacters[(Math.floor(Math.random() * allCharacters.length))];
        console.log(retVal)
    }
    return retVal;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
