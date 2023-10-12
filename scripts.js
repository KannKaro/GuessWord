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

//Ponizej tworze timer ktory odlicza od 30 do 0
let maxTime = 30 // maksymalny czas
let oneSecond = 1000 // jedna sekunda to 1000 milisekund
let randomWord = words[Math.floor(Math.random() * words.length)] //wybieram losowe slowo z listy
// Ponizej losuje kolejnosc literek w slowie
let shuffledLetters = randomWord.split('').sort(function () { return 0.5 - Math.random() }).join('');
//Ponizej wyswietlam juz wylosowane i pomieszane slowo na ekran
console.log(randomWord)
// funkcja sie wykonuje gdy wlacza sie strona
window.addEventListener('load', function () {
    this.document.getElementById('word').innerHTML = shuffledLetters
})

const timer = setInterval(function () {
    maxTime--
    document.getElementById('time').innerHTML = maxTime + 's';
    //Ponizej jezeli timer wejdzie na 0 to strona sie odswieza
    if (maxTime === 0) {
        window.location.reload()
    }
}, oneSecond) // funkcja wykonuje sie co 1 sekunde

//Sprawdzanie slowa
document.getElementById('check').addEventListener('click', function () {
    let yourInput = document.getElementById('text-container').value
    //Gdy zgadniesz slowo wyskakuje alert z gratulacjami, toUpperCase powoduje ze mozesz pisac z malych liter
    if (yourInput.toUpperCase() === randomWord) {
        alert('Brawo zgadles')
        window.location.reload()
    }
})
