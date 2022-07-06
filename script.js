// Assignment code here
const form = document.getElementById("stopper")
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
const UpperCase_char = arryFromLowToHigh(65, 90)
const LowerCase_char = arryFromLowToHigh(97, 122)
const Numbers_char = arryFromLowToHigh(48, 57)
const Symbols_char = arryFromLowToHigh(33, 47).concat(
  arryFromLowToHigh(58, 64)
).concat(
  arryFromLowToHigh(91, 96)
).concat(
  arryFromLowToHigh(123, 126)
)

form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = window.prompt("Character length, Min:8, max: 128")
  const includeUppercase = window.prompt("Do you want to include upper case charachters?")
  const includeNumbers = window.prompt("Do you want to include numbers?")
  const includeSymbols = window.prompt("Do you want to include special symbols characters?")
  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
  passwordText.innerText = password;
  console.log();
})

function generatePassword(characterAmount, includeNumbers, includeUppercase, includeSymbols) {
  let charCodes = LowerCase_char
  if (includeUppercase === true) charCodes = charCodes.concat
  (UpperCase_char)
  if (includeNumbers) charCodes = charCodes.concat
  (Numbers_char)
  if(includeSymbols) charCodes = charCodes.concat 
  (includeSymbols)
  const passwordCharcter = []
  for (let i = 0; i < characterAmount; i++) {
    const charactercode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharcter.push(string.fromCharCode(charactercode))
  }
  return passwordCharcter.join('')
}

function arryFromLowToHigh(low, high){
  const array = []
  for (let i = low; i <= high; i++) {
   array.push(i)
  }
  return array
}