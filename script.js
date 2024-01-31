const botaoPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo')
const numeroCapitulos = 10;
let taTocando = 0;


function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle');
    botaoPlayPause.classList.add('bi-pause-circle');
}

function pausarFaixa() {
    audioCapitulo.pause()
    botaoPlayPause.classList.remove('bi-pause-circle');
    botaoPlayPause.classList.add('bi-play-circle');
}

function tocarOuPausar() {
    if(taTocando === 0) {
        tocarFaixa();
        taTocando = 1
    } else {
        pausarFaixa();
        taTocando = 0
    }
}

botaoPlayPause.addEventListener('click', tocarOuPausar);
