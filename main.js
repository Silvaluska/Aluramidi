const teclas = document.querySelectorAll('.tecla');
const audios = document.querySelectorAll('audio');

function tocaSom(id) {
    audios[id].play();
}

for (var i = 0; i < 9; i++) {
    const id = i;
    teclas[i].onclick = function () {
        tocaSom(id);
    }
}
