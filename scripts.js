let words = [ //slowa ktore sa uzywane do gry
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
let showGameWord = this.document.getElementById('word')
let showTime = document.getElementById('time')
let checkWord = document.getElementById('check')
let maxTime = 30
let oneSecond = 1000
let randomWord = words[Math.floor(Math.random() * words.length)] //wybieram losowe slowo z listy
// Ponizej losuje kolejnosc literek w slowie
let shuffledLetters = randomWord.split('').sort(function () { return 0.5 - Math.random() }).join('');
console.log(randomWord)

window.addEventListener('load', function () {
    showGameWord.innerHTML = shuffledLetters
})

const timer = setInterval(function () {
    maxTime--
    showTime.innerHTML = maxTime + 's';
    //Ponizej jezeli timer wejdzie na 0 to strona sie odswieza
    if (maxTime === 0) {
        window.location.reload()
    }
}, oneSecond)

checkWord.addEventListener('click', function () {
    let yourInput = document.getElementById('text-container').value
    if (yourInput.toUpperCase() === randomWord) {
        alert('Brawo zgadles')
        window.location.reload()
    }
})
