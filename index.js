const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"
];
const charactersNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const charactersSymbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"]
const charactersUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const charactersLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

let passOneEl = document.getElementById("passOne")
let passTwoEl = document.getElementById("passTwo")
let numbersCheck = document.getElementById("numbers")
let symbolsCheck = document.getElementById("symbols")
let uppersCheck = document.getElementById("uppercase")
let lowerCheck = document.getElementById("lowercase")
let range = document.getElementById("range")
let rangeValue = document.getElementById("range-value")

rangeValue.textContent = range.value
range.addEventListener("input", function () {
    rangeValue.textContent = range.value
})
genbtn.addEventListener("click", function () {

    let userChoice1 = []
    let userChoice2 = []
    let finalCharacters = []
    rangeValue.textContent = range.value

    if (numbersCheck.checked) {

        finalCharacters.push(...charactersNumber)

    }
    if (symbolsCheck.checked) {


        finalCharacters.push(...charactersSymbols)
    }
    if (uppersCheck.checked) {


        finalCharacters.push(...charactersUppercase)
    }
    if (lowerCheck.checked) {


        finalCharacters.push(...charactersLowercase)
    }

    if (finalCharacters.length === 0) {
        finalCharacters.push(...characters)
    }

    for (let i = 0; i < range.value; i++) {
        let index = Math.floor(Math.random() * finalCharacters.length)
        userChoice1.push(finalCharacters[index])
    }
    for (let i = 0; i < range.value; i++) {
        let index = Math.floor(Math.random() * finalCharacters.length)
        userChoice2.push(finalCharacters[index])
    }
    passOneEl.textContent = userChoice1.join("")
    passTwoEl.textContent = userChoice2.join("")





})
function copyPassOne() {
    navigator.clipboard.writeText(passOneEl.textContent)
}
function copyPassTwo() {
    navigator.clipboard.writeText(passTwoEl.textContent)
}