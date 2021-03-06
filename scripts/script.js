let opcaoImagem = document.querySelectorAll('#img1,#img2,#img3');
let resultadoBG = document.querySelector('#divResultadoBG');
let resultadoUp = document.querySelector('#divResultadoUp');
let resultadoDown = document.querySelector('#divResultadoDown');
let inputColorText = document.querySelector("input[type='color']");
let textBoxUp = document.querySelector('#textBoxUp');
let textBoxDown = document.querySelector('#textBoxDown');
let btnDownload = document.querySelector('.download');


function selecionarFundo() {
    let caminho = this.dataset.caminho;

    resultadoBG.style.backgroundImage = `url(${caminho})`;
}

opcaoImagem.forEach(function (elemento) {
    elemento.addEventListener('input', selecionarFundo);
})
/*
inputColorText.addEventListener('input', function () {
    resultado.style.color = this.value;
})
*/
textBoxUp.addEventListener('input', function () {
    resultadoUp.innerHTML = "<span class='textMeme'>" + this.value + "<span>";
})

textBoxDown.addEventListener ('input', function () {
    resultadoDown.innerHTML = "<span class='textMeme'>" + this.value + "<span>";
})

function download() {
    domtoimage.toPng(resultado)
        .then(function (urlsaida) {
            let link = document.createElement('a');
            link.download = 'saida.png';
            link.href = urlsaida;
            link.click();
        })
        .catch(function (erro) {
            alert('Erro ao baixar', erro);
        })
}