let opcaoImagem = document.querySelectorAll('#img1,#img2,#img3');
let resultadoBG = document.getElementById('divResultadoBG');
let resultadoUp = document.getElementById('divResultadoUp');
let resultadoDown = document.getElementById('divResultadoDown');
let textBoxUp = document.getElementById('textBoxUp');
let textBoxDown = document.getElementById('textBoxDown');
let btnDownload = document.getElementById('downloadButton');
let inputImage = document.getElementById('inputUploadImage')

/* Lista de memes e seletor */


function selecionarFundo() {
    let caminho = this.dataset.caminho;

    resultadoBG.style.backgroundImage = `url(${caminho})`;
}

opcaoImagem.forEach(function (elemento) {
    elemento.addEventListener('input', selecionarFundo);
})

/* Upload de foto */

window.addEventListener('load', function(){
    document.getElementById('inputUploadImage').addEventListener('change', function(){
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');
            img.src = URL.createObjectURL(this.files[0]);
            resultadoBG.style.backgroundImage = `url(${img.src})`;
        }
    }
    );
});

/* Inputs de textos */

textBoxUp.addEventListener('input', function () {
    resultadoUp.innerHTML = "<span class='textMeme'>" + this.value + "<span>";
})

textBoxDown.addEventListener ('input', function () {
    resultadoDown.innerHTML = "<span class='textMeme'>" + this.value + "<span>";
})


/* Download */

function download() {
    domtoimage.toPng(resultadoBG, /*{height: 800, width:800}*/)
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