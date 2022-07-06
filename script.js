// Assignment code here
const form = document.getElementById("stopper")

const UpperCase_char = arryFromLowToHigh(65, 90)
const LowerCase_char = arryFromLowToHigh(97, 122)
const Numbers_char = arryFromLowToHigh(48, 57)
const Symbols_char = arryFromLowToHigh(33, 47).concat(
  arryFromLowToHigh(58, 64)
)

form.addEventListener('submit', e => {
  e.preventDefault()
  const password = generatePassword(characterAmount, IncludeUppercase, includeNumbers, IncludeSymbols)
})

function generatePassword(characterAmount, includeNumbers, IncludeUppercase, IncludeSymbols) {
  prompt("how ong is your password?")
  String.fromCharCode
}

function arryFromLowToHigh(Low, High){
  const array = []
  for (let i = low; i <= High; I++) {
   array.push(i)
  }
  return array
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