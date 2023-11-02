var butPrev = document.getElementById("prev");
var butNext = document.getElementById("next");

var botAux = document.getElementById("auxiliar");
botAux.style.visibility = "hidden";
showPostit('False')

var misterioSelecionado = "";

// var prayBox = document.getElementById("texto");
var text1 = document.getElementById("frase-01");
var text2 = document.getElementById("frase-02");
var text3 = document.getElementById("frase-03");
var text4 = document.getElementById("frase-04");

var corDoTerco = "yellow";
var corJaRezado = "red";

function misterioDeHoje(){
    /* 
    Por padrão:
        Segundas e Sábados - Gozosos
        Terças e Sextas - Dolorosos
        Quartas e Domingos - Gloriosos
        Quintas - Luminosos

    Excessões Dominicais:
        Domingos do Advento - Gozosos
        Domingos da Quaresma até a Páscoa - Dolorosos
        Domingos da Páscoa até o Advento - Gloriosos
    */

    var diaDaSemana = document.getElementById("dia-semana");
    var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    var d = new Date();

    var hoje = semana[d.getDay()];
    diaDaSemana.innerHTML = hoje;

    var misterioCabecalho = document.getElementById("misterio-de-hoje");

    switch (hoje) {
        case "Segunda-Feira":
        case "Sábado":
            misterioCabecalho.innerHTML = "Hoje rezamos os Mistérios Gozosos";
            misterioSelecionado = 0;
            break;

        case "Terça-Feira":
        case "Sexta-Feira":
            misterioCabecalho.innerHTML = "Hoje rezamos os Mistérios Dolorosos";    
            misterioSelecionado = 1;
            break;

        case "Quarta-Feira":
        case "Domingo":
            misterioCabecalho.innerHTML = "Hoje rezamos os Mistérios Gloriosos";    
            misterioSelecionado = 2;
            break;

        case "Quinta-Feira":
            misterioCabecalho.innerHTML = "Hoje rezamos os Mistérios Luminosos";    
            misterioSelecionado = 3;
            break;
                        
        default:
            break;
    }
}

misterioDeHoje();

function escolherTerco(terco) {
    misterioSelecionado = terco;

    switch(terco) {
        case 0:
            document.getElementById("misterio-de-hoje").innerHTML = "Mistérios Gozosos";
            break;
        case 1:
            document.getElementById("misterio-de-hoje").innerHTML = "Mistérios Dolorosos";
            break;
        case 2:
            document.getElementById("misterio-de-hoje").innerHTML = "Mistérios Gloriosos";
            break;
        case 3:
            document.getElementById("misterio-de-hoje").innerHTML = "Mistérios Luminosos";
            break;
    }

    prayIndex = 0;
    refreshProgress()   // Reseta progresso do terço
    for (let index = 0; index < contas.length; index++) {   // Reseta cores das contas
        document.getElementById(contas[index]).style.fill = corDoTerco;        
    }
}

var prayIndex = 0;

butNext.style.visibility = "hidden";
butPrev.style.visibility = "hidden";

function start() {
    butNext.style.visibility = "visible";
    nextPray();
}

function nextPray() {
    if(prayIndex < contas.length){
        document.getElementById(contas[prayIndex]).style.fill = corJaRezado;
    }

    prayIndex++;
    if(prayIndex > 1){
        butPrev.style.visibility = "visible";
    }
    // console.log("Index: " + prayIndex);

    refreshProgress();
}

function prevPray() {
    document.getElementById(contas[prayIndex-1]).style.fill = corDoTerco;

    prayIndex--;
    if(prayIndex <= 0){
        prayIndex = 0;
        butPrev.style.visibility = "hidden";
    }
    // console.log("Index: " + prayIndex);

    refreshProgress();
}

function clearPrayBox() {
    text1.innerHTML = "";
    text2.innerHTML = "";
    text3.innerHTML = "";
    text4.innerHTML = "";

    text1.onclick = function(){};
    text2.onclick = function(){};
    text3.onclick = function(){};
    text4.onclick = function(){};

    botAux.style.visibility = "hidden";
}

function rezandoMisterio(mist) {
    text1.innerHTML = "No " + mist +  "º mistério contemplemos" + misterios[misterioSelecionado][mist];

    botAux.style.visibility = "visible";
    botAux.innerHTML = "Avançar";
    
    botAux.onclick = function(){
        clearPrayBox();
        text1.innerHTML = "Colocamos agora nossas intenções para este mistério";
        
        botAux.style.visibility = "visible";
        
        botAux.onclick = function(){
            clearPrayBox();
    
            text1.innerHTML = tituloOracao[3];
            text1.onclick = function(){ printOracao(3); }
        };
    };
}

function aveMaria() {
    text1.innerHTML = tituloOracao[4];
    text1.onclick = function(){ printOracao(4); };
}

function fechandoMisterio(){
    text1.innerHTML = tituloOracao[5] + "<br><br>";
    text2.innerHTML = tituloOracao[6] + "<br><br>";
    text3.innerHTML = tituloOracao[9];

    text1.onclick = function(){ printOracao(5); };
    text2.onclick = function(){ printOracao(6); };
    text3.onclick = function(){ printOracao(9); };
}

function ultimaAveMaria() {
    botAux.style.visibility = "visible";
    botAux.innerHTML = "Avançar";
    
    botAux.onclick = function(){
        clearPrayBox();
        botAux.style.visibility = "hidden";

        fechandoMisterio()
    };
}

function conclusaoDoTerco(){      
    butNext.innerHTML = "Concluído!";

    text1.innerHTML = tituloOracao[7] + "<br><br>";
    text2.innerHTML = tituloOracao[8] + "<br><br>";
    text3.innerHTML = tituloOracao[0];

    text1.onclick = function(){ printOracao(7); };
    text2.onclick = function(){ printOracao(8); }; 
    text3.onclick = function(){ printOracao(0); }; 
}

function printOracao(numOracao){
    modalSet(tituloOracao[numOracao], oracao[numOracao]);
    modalDisplay("block");
};

function showPostit(visible) {
    postit = document.getElementById('postit');
    if (visible == 'True'){
        postit.style.visibility = "visible";
    } else {
        postit.style.visibility = "hidden";
    }
}

function refreshProgress() {
    if (prayIndex == 0){
        clearPrayBox();
        showPostit('False');
    }
    else if (prayIndex == 1){
        clearPrayBox();

        text1.innerHTML = tituloOracao[0] + "<br><br>";
        text2.innerHTML = tituloOracao[1] + "<br><br>";
        text3.innerHTML = tituloOracao[2];

        text1.onclick = function() { printOracao(0); }
        text2.onclick = function() { printOracao(1); }
        text3.onclick = function() { printOracao(2); }

        showPostit('True');
    }
    else if (prayIndex == 2){
        clearPrayBox();

        text1.innerHTML = tituloOracao[3];
        text1.onclick = function() { printOracao(3); };
        
        showPostit('False')
    }
    else if (prayIndex == 3){
        clearPrayBox();

        text1.innerHTML = tresAveMarias[1] + "<br><br>";
        text2.innerHTML = tituloOracao[4];
        text2.onclick = function() { printOracao(4); };
    }
    else if (prayIndex == 4){
        clearPrayBox();

        text1.innerHTML = tresAveMarias[2] + "<br><br>";
        text2.innerHTML = tituloOracao[4];
        text2.onclick = function() { printOracao(4); };
    }
    else if (prayIndex == 5){
        clearPrayBox();

        text1.innerHTML = tresAveMarias[3] + "<br><br>";
        text2.innerHTML = tituloOracao[4];
        text2.onclick = function() { printOracao(4); };
        ultimaAveMaria()
    }
    else if (prayIndex == 6){
        clearPrayBox();
        rezandoMisterio(1);
    }
    else if ((prayIndex >= 7) && (prayIndex <= 15)){
        clearPrayBox();
        aveMaria();
    }
    else if (prayIndex == 16){
        clearPrayBox();
        aveMaria();
        ultimaAveMaria()
    }
    else if (prayIndex == 17){
        clearPrayBox();
        rezandoMisterio(2);
    }
    else if ((prayIndex >= 18) && (prayIndex <= 26)){
        clearPrayBox();
        aveMaria();
    }
    else if (prayIndex == 27){
        clearPrayBox();
        aveMaria();
        ultimaAveMaria()
    }
    else if (prayIndex == 28){
        clearPrayBox();
        rezandoMisterio(3);
    }
    else if ((prayIndex >= 29) && (prayIndex <= 37)){
        clearPrayBox();
        aveMaria();
    }
    else if (prayIndex == 38){
        clearPrayBox();
        aveMaria();
        ultimaAveMaria()
    }
    else if (prayIndex == 39){
        clearPrayBox();
        rezandoMisterio(4);
    }
    else if ((prayIndex >= 40) && (prayIndex <= 48)){
        clearPrayBox();
        aveMaria();
    }
    else if (prayIndex == 49){
        clearPrayBox();
        aveMaria();
        ultimaAveMaria()
    }
    else if (prayIndex == 50){
        clearPrayBox();
        rezandoMisterio(5);
    }
    else if ((prayIndex >= 51) && (prayIndex <= 59)){
        clearPrayBox();
        aveMaria();
    }
    else if (prayIndex == 60){
        clearPrayBox();
        aveMaria();
        ultimaAveMaria()
    }
    else if (prayIndex == 61){
        clearPrayBox();
        conclusaoDoTerco();
    }
    else if (prayIndex == 62){
        modalSet("Parabéns!!!", "Você concluiu o Terço! Com certeza Nossa mãezinha e nosso maravilhoso Deus estão muito felizes! Obrigado por rezar conosco!<br>Paz e Bem!");
        modalButton.style.display = "block";
        modalClose.style.display = "none";
        modalDisplay("block");
        
        modalButton.onclick = function(){
            location.reload();
        }
    } else {
        clearPrayBox();
    }
}

document.querySelector('body').addEventListener('keydown', function(event) {
		 
    var tecla = event.keyCode;
    
    if(tecla == 13) {

     // tecla ENTER
        
    } else if(tecla == 27) {
     
     // tecla ESC
        
    } else if(tecla == 37) {
     
     // seta pra ESQUERDA
     prevPray()
        
    } else if(tecla == 38) {
     
     // seta pra CIMA
        
    } else if(tecla == 39) {
     
     // seta pra DIREITA
     nextPray()
        
    } else if(tecla == 40) {
     
     // seta pra BAIXO
        
    }
 
});