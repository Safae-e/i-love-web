
// // Stap 1: zoek de input en stop die in een variabele//
// let inputElement = document.querySelector('input');

// // Stap 2: luister naar het invalid event, en wacht tot dat afgevuurd wordt..
// inputElement.addEventListener('invalid', function(ev) {

//   // Stap 3: pas de tekst in de validatiemelding aan
//   inputElement.setCustomValidity('Dit veld mag niet leeg zijn hoor..');

// });

let audio = document.querySelector('audio')
let playButton = document.querySelector('.play-button')

playButton.addEventListener('click', function() {

    if (audio.paused) {
        // playButton.classList.add('')
        audio.play()
    } else {
        // playButton.classList.add('')
        audio.pause()
    }
})

// audio.hidden = true;
// playButton.hidden = false;