const teclas = document.querySelectorAll('.tecla');
const audios = document.querySelectorAll('audio');

function tocaSom(id) {
    if (id > 9) {
        alert('Elemento não encontrado');
    }
    else if (id < 10) {
        audios[id].play();
    }
}

for (var i = 0; i < 9; i++) {
    const id = i;
    teclas[i].onclick = function () {
        tocaSom(id);
    }
    teclas[i].onkeydown = function (evento) {
        if (evento.code === "Enter" || evento.code === "Space") {
            teclas[id].classList.add('ativa');
        }
    }
    teclas[i].onkeyup = function () {
        teclas[id].classList.remove('ativa');
    }
}
