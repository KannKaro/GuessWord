let words = [
    'KAWIARNIA',
    'FINANSE',
    'NIEBO',
    'KONSUMENT',
    'PODATEK',
    'FUTRO',
    'SZALIK',
    'KRAWAT',
    'CHMURA'
]
let randomWord
let maxTime = 30
const ONE_SECOND = 1000
let checkWord = document.getElementById('checkWord')

window.addEventListener('load', getRandomAndShuffledWord())

function getRandomAndShuffledWord() {
    randomWord = getRandomWord()
    let shuffledLetters = getShuffledLetters()
    let showGameWord = this.document.getElementById('showGameWord')
    showGameWord.innerHTML = shuffledLetters
}
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)]
}

function getShuffledLetters() {
    return randomWord.split('').sort(function () { return 0.5 - Math.random() }).join('');
}


const timer = setInterval(function () {
    let showTime = document.getElementById('showTime')
    maxTime--
    showTime.innerHTML = maxTime + 's';
    if (maxTime === 0) {
        window.location.reload()
    }
}, ONE_SECOND)

checkWord.addEventListener('click', function () {
    let yourInput = document.getElementById('yourInput').value
    if (yourInput.toUpperCase() === randomWord) {
        alert('Brawo zgadles')
        window.location.reload()
    }
})
