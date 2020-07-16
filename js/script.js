var butPrev = document.getElementById("prev");
var butNext = document.getElementById("next");

var botAux = document.getElementById("auxiliar");
botAux.style.visibility = "hidden";
showPostit('False')

var misteriosDeHoje = "";

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
            misteriosDeHoje = 0;
            break;

        case "Terça-Feira":
        case "Sexta-Feira":
            misterioCabecalho.innerHTML = "Hoje rezamos os Mistérios Dolorosos";    
            misteriosDeHoje = 1;
            break;

        case "Quarta-Feira":
        case "Domingo":
            misterioCabecalho.innerHTML = "Hoje rezamos os Mistérios Gloriosos";    
            misteriosDeHoje = 2;
            break;

        case "Quinta-Feira":
            misterioCabecalho.innerHTML = "Hoje rezamos os Mistérios Luminosos";    
            misteriosDeHoje = 3;
            break;
                        
        default:
            break;
    }
}

misterioDeHoje();

var prayIndex = 0;

butNext.style.visibility = "hidden";
butPrev.style.visibility = "hidden";

function start() {
    butNext.style.visibility = "visible";
    nextPray();
}

function nextPray() {
    prayIndex++;
    if(prayIndex > 1){
        butPrev.style.visibility = "visible";
    }
    // console.log("Index: " + prayIndex);

    refreshProgress();
}

function prevPray() {
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

function rezandoMisterio(mist, conta) {
    text1.innerHTML = "No " + mist +  "º mistério contemplemos" + misterios[misteriosDeHoje][mist];

    botAux.style.visibility = "visible";
    botAux.innerHTML = "Avançar";
    
    botAux.onclick = function(){
        clearPrayBox();
        botAux.style.visibility = "visible";

        // text1.innerHTML = "Colocamos agora nossas intenções para este mistério";
        text1.innerHTML = frutos[misteriosDeHoje][mist];

        botAux.onclick = function(){
            clearPrayBox();
            
            text1.innerHTML = tituloOracao[4];
            text1.onclick = function(){ printOracao(4); };
        }
    };

    document.getElementById(conta).style.fill = corJaRezado;
}

function aveMaria(conta) {
    text1.innerHTML = tituloOracao[4];
    text1.onclick = function(){ printOracao(4); };
    document.getElementById(conta).style.fill = corJaRezado;
}

function paiNosso(conta) {
    document.getElementById(conta).style.fill = corJaRezado;

    text1.innerHTML = tituloOracao[5] + "<br><br>";
    text2.innerHTML = tituloOracao[6] + "<br><br>";
    text3.innerHTML = tituloOracao[9] + "<br><br>";
    text4.innerHTML = tituloOracao[3];

    text1.onclick = function(){ printOracao(5); };
    text2.onclick = function(){ printOracao(6); };
    text3.onclick = function(){ printOracao(9); };
    text4.onclick = function(){ printOracao(3); };
}

function conclusaoDoTerco(){
    paiNosso("Salve-Rainha");
    text4.innerHTML = "";
    text4.onclick = function(){};

    botAux.style.visibility = "visible";
    botAux.innerHTML = "Avançar";
    
    botAux.onclick = function(){
        clearPrayBox();
            
        butNext.innerHTML = "Concluído!";

        text1.innerHTML = tituloOracao[7] + "<br><br>";
        text2.innerHTML = tituloOracao[8] + "<br><br>";
        text3.innerHTML = tituloOracao[0];

        text1.onclick = function(){ printOracao(7); };
        text2.onclick = function(){ printOracao(8); }; 
        text3.onclick = function(){ printOracao(0); }; 
    };
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
    // console.log("Atualizando progresso do Terço");
    switch (prayIndex) {
        case 0:
            clearPrayBox();
            showPostit('False')
            break;
        case 1:
            clearPrayBox();
            document.getElementById("crucifixo").style.fill = corJaRezado;

            text1.innerHTML = tituloOracao[0] + "<br><br>";
            text2.innerHTML = tituloOracao[1] + "<br><br>";
            text3.innerHTML = tituloOracao[2];

            text1.onclick = function() { printOracao(0); }
            text2.onclick = function() { printOracao(1); }
            text3.onclick = function() { printOracao(2); }

            showPostit('True');
            break;
        case 2:
            clearPrayBox();
            document.getElementById("Pai-Nosso-01").style.fill = corJaRezado;

            text1.innerHTML = tituloOracao[3];
            text1.onclick = function() { printOracao(3); };
            
            showPostit('False')
            break;
        case 3:
            clearPrayBox();
            document.getElementById("Ave-Maria-01").style.fill = corJaRezado;

            text1.innerHTML = tresAveMarias[1] + "<br><br>";
            text2.innerHTML = tituloOracao[4];
            text2.onclick = function() { printOracao(4); };
            break;
        case 4:
            clearPrayBox();
            document.getElementById("Ave-Maria-02").style.fill = corJaRezado;

            text1.innerHTML = tresAveMarias[2] + "<br><br>";
            text2.innerHTML = tituloOracao[4];
            text2.onclick = function() { printOracao(4); };
            break;
        case 5:
            clearPrayBox();
            document.getElementById("Ave-Maria-03").style.fill = corJaRezado;

            text1.innerHTML = tresAveMarias[3] + "<br><br>";
            text2.innerHTML = tituloOracao[4];
            text2.onclick = function() { printOracao(4); };
            break;
        case 6:
            clearPrayBox();
            paiNosso("Pai-Nosso-02");
            break;
        case 7:
            clearPrayBox();
            rezandoMisterio(1, "1-mist-01");
            break;
        case 8:
            clearPrayBox();
            aveMaria("1-mist-02");
            break;
        case 9:
            clearPrayBox();
            aveMaria("1-mist-03");
            break;
        case 10:
            clearPrayBox();
            aveMaria("1-mist-04");
            break;
        case 11:
            clearPrayBox();
            aveMaria("1-mist-05");
            break;
        case 12:
            clearPrayBox();
            aveMaria("1-mist-06");
            break;
        case 13:
            clearPrayBox();
            aveMaria("1-mist-07");
            break;
        case 14:
            clearPrayBox();
            aveMaria("1-mist-08");
            break;
        case 15:
            clearPrayBox();
            aveMaria("1-mist-09");
            break;
        case 16:
            clearPrayBox();
            aveMaria("1-mist-10");
            break;
        case 17:
            clearPrayBox();
            paiNosso("Pai-Nosso-03");
            break;
        case 18:
            clearPrayBox();
            rezandoMisterio(2, "2-mist-01");
            break;
        case 19:
            clearPrayBox();
            aveMaria("2-mist-02");
            break;
        case 20:
            clearPrayBox();
            aveMaria("2-mist-03");
            break;
        case 21:
            clearPrayBox();
            aveMaria("2-mist-04");
            break;
        case 22:
            clearPrayBox();
            aveMaria("2-mist-05");
            break;
        case 23:
            clearPrayBox();
            aveMaria("2-mist-06");
            break;
        case 24:
            clearPrayBox();
            aveMaria("2-mist-07");
            break;
        case 25:
            clearPrayBox();
            aveMaria("2-mist-08");
            break;
        case 26:
            clearPrayBox();
            aveMaria("2-mist-09");
            break;
        case 27:
            clearPrayBox();
            aveMaria("2-mist-10");
            break;
        case 28:
            clearPrayBox();
            paiNosso("Pai-Nosso-04");
            break;
        case 29:
            clearPrayBox();
            rezandoMisterio(3, "3-mist-01");
            break;
        case 30:
            clearPrayBox();
            aveMaria("3-mist-02");
            break;
        case 31:
            clearPrayBox();
            aveMaria("3-mist-03");
            break;
        case 32:
            clearPrayBox();
            aveMaria("3-mist-04");
            break;
        case 33:
            clearPrayBox();
            aveMaria("3-mist-05");
            break;
        case 34:
            clearPrayBox();
            aveMaria("3-mist-06");
            break;
        case 35:
            clearPrayBox();
            aveMaria("3-mist-07");
            break;
        case 36:
            clearPrayBox();
            aveMaria("3-mist-08");
            break;
        case 37:
            clearPrayBox();
            aveMaria("3-mist-09");
            break;
        case 38:
            clearPrayBox();
            aveMaria("3-mist-10");
            break;
        case 39:
            clearPrayBox();
            paiNosso("Pai-Nosso-05");
            break;
        case 40:
            clearPrayBox();
            rezandoMisterio(4, "4-mist-01");
            break;
        case 41:
            clearPrayBox();
            aveMaria("4-mist-02");
            break;
        case 42:
            clearPrayBox();
            aveMaria("4-mist-03");
            break;
        case 43:
            clearPrayBox();
            aveMaria("4-mist-04");
            break;
        case 44:
            clearPrayBox();
            aveMaria("4-mist-05");
            break;
        case 45:
            clearPrayBox();
            aveMaria("4-mist-06");
            break;
        case 46:
            clearPrayBox();
            aveMaria("4-mist-07");
            break;
        case 47:
            clearPrayBox();
            aveMaria("4-mist-08");
            break;
        case 48:
            clearPrayBox();
            aveMaria("4-mist-09");
            break;
        case 49:
            clearPrayBox();
            aveMaria("4-mist-10");
            break;
        case 50:
            clearPrayBox();
            paiNosso("Pai-Nosso-06");
            break;
        case 51:
            clearPrayBox();
            rezandoMisterio(5, "5-mist-01");
            break;
        case 52:
            clearPrayBox();
            aveMaria("5-mist-02");
            break;
        case 53:
            clearPrayBox();
            aveMaria("5-mist-03");
            break;
        case 54:
            clearPrayBox();
            aveMaria("5-mist-04");
            break;
        case 55:
            clearPrayBox();
            aveMaria("5-mist-05");
            break;
        case 56:
            clearPrayBox();
            aveMaria("5-mist-06");
            break;
        case 57:
            clearPrayBox();
            aveMaria("5-mist-07");
            break;
        case 58:
            clearPrayBox();
            aveMaria("5-mist-08");
            break;
        case 59:
            clearPrayBox();
            aveMaria("5-mist-09");
            break;
        case 60:
            clearPrayBox();
            aveMaria("5-mist-10");
            break;
        case 61:
            clearPrayBox();
            conclusaoDoTerco();
            break;
        case 62:
            modalSet("Parabéns!!!", "Você concluiu o Terço!! Com certeza Nossa mãezinha e nosso maravilhoso Deus estão muito felizes! Obrigado por rezar conosco! Que Deus te abençoe sempre!");
            modalButton.style.display = "block";
            modalClose.style.display = "none";
            modalDisplay("block");
            
            modalButton.onclick = function(){
                location.reload();
            }
            break;

        default:
            clearPrayBox();
            break;
    }
}
