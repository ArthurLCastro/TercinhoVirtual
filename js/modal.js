var modal = document.getElementById("myModal");
var modalTitle = document.getElementById("modal-title");
var modalText = document.getElementById("modal-text");
var modalClose = document.getElementById("modal-close");
var modalButton = document.getElementById("modal-button");

modalButton.style.display = "none";

modalClose.onclick = function() {
    modal.style.display = "none";
}

function modalDisplay(display){
    modal.style.display = display;
}

function modalSet(tituloOracao, textoOracao){
    modalTitle.innerHTML = tituloOracao;
    modalText.innerHTML = textoOracao;
}