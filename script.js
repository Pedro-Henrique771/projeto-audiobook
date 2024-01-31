const botaoPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo')
const proximoCapitulo = document.getElementById('proximo')
const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;


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

function proximaFaixa () {
    if( capituloAtual === numeroCapitulos) {
        capituloAtual = 1
    }else { 
        capituloAtual += 1
    }
    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3"
    tocarFaixa();
    taTocando = 1;
}

botaoPlayPause.addEventListener('click', tocarOuPausar);

proximoCapitulo.addEventListener('click', proximaFaixa);