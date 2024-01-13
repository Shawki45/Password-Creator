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
  window.alert("Click Ok To Continue")
  window.prompt("How many characters you want it to be?")
  window.confirm("Are you sure?") 

  passwordText.value = password;
  

}
function generatePassword() {
    var allCharacters = []
    var upppercaseConfirm = window.confirm("Would you like uppercase characters?")
    if(upppercaseConfirm == true){
        allCharacters += uppercaseCharacters
        console.log(allCharacters)
    }
    var lowercaseConfirm = window.confirm("Would you like lowercase characters")
    if(lowercaseConfirm == true){
        allCharacters += lowercaseCharacters
        console.log(allCharacters)
    }
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
