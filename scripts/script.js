let opcaoImagem = document.querySelectorAll('#img1,#img2,#img3');
let resultadoBG = document.getElementById('divResultadoBG');
let resultadoUp = document.getElementById('divResultadoUp');
let resultadoDown = document.getElementById('divResultadoDown');
let textBoxUp = document.getElementById('textBoxUp');
let textBoxDown = document.getElementById('textBoxDown');
let btnDownload = document.getElementById('downloadButton');
let inputImage = document.getElementById('inputUploadImage')

/* Lista de memes e seletor */

const memes = [
    'pastaMemes/BBB21-Rodolffo-01.jpg', 
    'pastaMemes/BBB21-ArturCarla-01.jpg', 
    'pastaMemes/BBB21-Karol-01.jpg', 
    'pastaMemes/BBB21-Sarah-01.jpg', 
    'pastaMemes/BBB21-Fiuk-01.jpg', 
    'pastaMemes/BBB21-Lumena-02.jpg', 
    'pastaMemes/BBB21-Lumena-01.jpg', 
    'pastaMemes/BBB21-Gil-01.jpg', 
    'pastaMemes/BBB21-Fiuk-02.jpg'
];  

window.onload = memeListToDiv(); 

function memeListToDiv (){

    const memeListElement = document.getElementById('divMemes');
  
for(var i = 0; i < memes.length; i++){

    memeListElement.innerHTML +=  
    `<div class="card-meme" style="background-image: url(${memes[i]})"> 
    <button type="button" class="btn btn-outline-light btn-sm"  id="btnChangeMeme" onclick="selecionarFundo(${i})">Usar meme</button> </div>`;
  }

}


function selecionarFundo(id) {

    resultadoBG.style.backgroundImage = `url(${memes[id]})`;
}



/* Botao de upload de foto */

window.addEventListener('load', function(){
    document.getElementById('inputUploadImage').addEventListener('change', function(){
        if (this.files && this.files[0]) {
            var img = document.getElementById('divResultadoBG');
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
            link.download = 'meme.png';
            link.href = urlsaida;
            link.click();
        })
        .catch(function (erro) {
            alert('Erro ao baixar', erro);
        })
}

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("enviarImagemBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "hide";
  }
}