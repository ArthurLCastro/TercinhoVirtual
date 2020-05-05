var butPrev = document.getElementById("prev");
var butNext = document.getElementById("next");
var prayBox = document.getElementById("oracao");

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
            break;

        case "Terça-Feira":
        case "Sexta-Feira":
            misterioCabecalho.innerHTML = "Hoje rezamos os Mistérios Dolorosos";    
            break;

        case "Quarta-Feira":
        case "Domingo":
            misterioCabecalho.innerHTML = "Hoje rezamos os Mistérios Gloriosos";    
            break;

        case "Quinta-Feira":
            misterioCabecalho.innerHTML = "Hoje rezamos os Mistérios Luminosos";    
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
    console.log("Index: " + prayIndex);

    refreshProgress();
}

function prevPray() {
    prayIndex--;
    if(prayIndex <= 0){
        prayIndex = 0;
        butPrev.style.visibility = "hidden";
    }
    console.log("Index: " + prayIndex);

    refreshProgress();
}

function refreshProgress() {
    console.log("Atualizando progresso do Terço");
    switch (prayIndex) {
        case 0:
            document.getElementById("crucifixo").style.fill = corDoTerco;
            prayBox.innerHTML="";
            break;
        case 1:
            document.getElementById("crucifixo").style.fill = corJaRezado;
            prayBox.innerHTML="Credo";
            break;
        case 2:
            document.getElementById("Pai-Nosso-01").style.fill = corJaRezado;
            prayBox.innerHTML="Pai Nosso...";
            break;
        case 3:
            document.getElementById("Ave-Maria-01").style.fill = corJaRezado;
            prayBox.innerHTML="A primeira Ave-Maria em honra a Deus Pai que nos criou <br><br>Ave Maria...";
            break;
        case 4:
            document.getElementById("Ave-Maria-02").style.fill = corJaRezado;
            prayBox.innerHTML="A segunda Ave Maria a Deus Filho que nos remiu <br><br>Ave Maria...";
            break;
        case 5:
            document.getElementById("Ave-Maria-03").style.fill = corJaRezado;
            prayBox.innerHTML="A terceira Ave Maria ao Espírito Santo que nos santifica <br><br>Ave Maria...";
            break;
        case 6:
            document.getElementById("Pai-Nosso-02").style.fill = corJaRezado;
            prayBox.innerHTML="Glória ao Pai... <br><br>Ó, meu Jesus... <br><br>Pai Nosso...";
            break;
        case 7:
            prayBox.innerHTML = "No primeiro mistério contemplemos" +
                                " a Agonia de Cristo Nosso Senhor, quando suou sangue no Horto"
            
            prayBox.innerHTML = "Colocamos agora nossas intenções para este mistério";

            prayBox.innerHTML = "Ave Maria...";

            document.getElementById("1-mist-01").style.fill = corJaRezado;
            break;
        default:
            break;
    }
}