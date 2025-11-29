const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"
];
let passOneEl = document.getElementById("passOne")
let passTwoEl = document.getElementById("passTwo")


genbtn.addEventListener("click", function () {
    let passArry2 = []
    let passArry1 = []
    for (let i = 0; i <= 15; i++) {
        let index = Math.floor(Math.random() * characters.length)
        passArry1.push(characters[index])

    }
    for (let i = 0; i <= 15; i++) {
        let index = Math.floor(Math.random() * characters.length)
        passArry2.push(characters[index])

    }

    passOneEl.textContent = passArry1
    passTwoEl.textContent = passArry2
})