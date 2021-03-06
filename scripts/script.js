let opcaoImagem = document.querySelectorAll('#img1,#img2,#img3');
let resultadoBG = document.getElementById('divResultadoBG');
let resultadoUp = document.getElementById('divResultadoUp');
let resultadoDown = document.getElementById('divResultadoDown');
let textBoxUp = document.getElementById('textBoxUp');
let textBoxDown = document.getElementById('textBoxDown');
let btnDownload = document.getElementById('downloadButton');


function selecionarFundo() {
    let caminho = this.dataset.caminho;

    resultadoBG.style.backgroundImage = `url(${caminho})`;
}

opcaoImagem.forEach(function (elemento) {
    elemento.addEventListener('input', selecionarFundo);
})

textBoxUp.addEventListener('input', function () {
    resultadoUp.innerHTML = "<span class='textMeme'>" + this.value + "<span>";
})

textBoxDown.addEventListener ('input', function () {
    resultadoDown.innerHTML = "<span class='textMeme'>" + this.value + "<span>";
})

function download() {
    domtoimage.toPng(resultadoBG, /*{height: 800, width:800}* este parâmtro está criando uma imagem maior porém os elementos não estao acompanhando o tamanho do canvas*/)
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