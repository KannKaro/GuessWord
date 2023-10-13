
let randomWord
let maxTime = 30
const ONE_SECOND = 1000
let checkWord = document.getElementById('checkWord')
const EMPTY_SPACE = ''

window.addEventListener('load', getRandomAndShuffledWord())

async function wordFromSite(numberOfWords) {
    const response = await fetch(`https://random-word-api.herokuapp.com/word?number=${numberOfWords}`)
    return await response.json()

}

async function getRandomAndShuffledWord() {
    await wordFromSite(10).then(json => words = json.slice())
    console.log(words)
    randomWord = getRandomWord()
    let shuffledLetters = getShuffledLetters()
    let showGameWord = this.document.getElementById('showGameWord')
    showGameWord.innerHTML = shuffledLetters
}
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)]
}

function getShuffledLetters() {
    return randomWord.split(EMPTY_SPACE).sort(function () { return 0.5 - Math.random() }).join(EMPTY_SPACE);
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
    if (yourInput.toLowerCase() === randomWord) {
        alert('Brawo zgadles')
        window.location.reload()
    }
})
