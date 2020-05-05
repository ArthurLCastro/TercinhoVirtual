var butPrev = document.getElementById("prev");
var butNext = document.getElementById("next");
var prayBox = document.getElementById("texto");

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
            prayBox.innerHTML="";
            break;
        case 1:
            document.getElementById("crucifixo").style.fill = corJaRezado;
            // prayBox.innerHTML= "Sinal da Cruz<br><br>Oferecimento do Terço<br><br>Credo";
            prayBox.innerHTML=
                tituloOracao[0] + "<br><br>" +
                tituloOracao[1] + "<br><br>" +
                tituloOracao[2];
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



// Estudar como importar os dados abaixo de outro arquivo...
var misterios = [
    gozosos = [
        "",     // Perda de memória para facilitar a contagem do array
        " a Anunciação do Arcanjo São Gabriel à Nossa Senhora.",
        " a Visitação de Nossa Senhora à sua prima Santa Isabel.",
        " o Nascimento do Menino Jesus em Belém.",
        " a Apresentação do Menino Jesus no templo e a Purificação de Nossa Senhora.",
        " a Perda e o Encontro do Menino Jesus no templo."
    ],

    dolorosos = [
        "",     // Perda de memória para facilitar a contagem do array
        " a Agonia de Cristo Nosso Senhor, quando suou sangue no Horto",
        " a Flagelação de Jesus Cristo atado à coluna.",
        " a Coroação de espinho de Nosso Senhor.",
        " Jesus Cristo carregando a Cruz para o Calvário.",
        " a Crucificação e morte de Nosso Senhor Jesus Cristo."
    ],

    gloriosos = [
        "",     // Perda de memória para facilitar a contagem do array
        " a Ressurreição de Cristo Nosso Senhor.",
        " a Ascensão de Nosso Senhor ao Céu.",
        " a Vinda do Espírito Santo sobre os Apóstolos reunidos com Maria Santíssima no Cenáculo em Jerusalém.",
        " a Assunção de Nossa Senhora ao Céu.",
        " a Coroação de Nossa Senhora no Céu como Rainha de todos os anjos e santos."
    ],

    luminosos = [
        "",     // Perda de memória para facilitar a contagem do array
        " o Batismo de Jesus no rio Jordão.",
        " a Auto-revelação de Jesus nas Bodas de Caná.",
        " o Anúncio do Reino de Deus.",
        " a Transfiguração de Jesus.",
        " a Instituição da Eucaristia."
    ]
]

var tresAveMarias = [
    "",     // Perda de memória para facilitar a contagem do array
    "A primeira Ave-Maria em honra a Deus Pai que nos criou",
    "A segunda Ave Maria a Deus Filho que nos remiu",
    "A terceira Ave Maria ao Espírito Santo que nos santifica"
]

var tituloOracao = [
    "Sinal da Cruz",
    "Oferecimento do Terço",
    "Credo",
    "Pai Nosso...",
    "Ave Maria...",
    "Glória ao Pai...",
    "Ó, meu Jesus...",
    "Agradecimento do Terço",
    "Salve Rainha"
]

var oracao = [
    "Em nome do Pai, do Filho e do Espírito Santo.\nAmém.",

    "Divino Jesus,\neu vos ofereço este terço (Rosário) que vou rezar, contemplando os mistérios de nossa Redenção. Concedei-me, pela intercessão de Maria, vossa Mãe Santíssima, a quem me dirijo, as graças necessárias para bem rezá-lo para ganhar as indulgências desta santa devoção.",

    "Creio\nem Deus Pai todo-poderoso, Criador do céu e da terra, e em Jesus Cristo, seu único Filho, nosso Senhor, que foi concebido pelo poder do Espírito Santo, nasceu da Virgem Maria, padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado; desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus, está sentado à direita de Deus Pai todo poderoso, donde há de vir julgar os vivos e os mortos. Creio no Espírito Santo, na Santa Igreja Católica, na comunhão dos santos, na remissão dos pecados, na ressurreição da carne e na vida eterna.\nAmém.",

    "Pai Nosso\nque estais nos céus, santificado seja o Vosso nome, venha a nós o Vosso reino, seja feita a vossa vontade, assim na terra como no céu. O pão nosso de cada dia nos dai hoje; perdoai-nos as nossa ofensas, assim como nós perdoamos a quem nos tem ofendido e não nos deixeis cair em tentação, mas livrai-nos do mal.\nAmém.",

    "Ave Maria\ncheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre Jesus. Santa Maria Mãe de Deus, rogai por nós pecadores, agora e na hora de nossa morte.\nAmém.",

    "Glória ao Pai,\nao Filho e o Espírito Santo. Como era no princípio, agora é sempre.\nAmém.",

    "Oh! Meu Jesus,\nperdoai-nos, livrai-nos do fogo do inferno, levai as almas todas para o céu e socorrei principalmente as que mais precisarem.\nAmém.",

    "Infinitas graças vos damos, Soberana Rainha, pelos benefícios que todos os dias recebemos de vossa mão liberais. Dignai-vos, agora e para sempre, tomar-nos debaixo do vosso poderoso amparo e para mais vos obrigar vos saudamos com uma Salve Rainha...",

    "Salve Rainha,\nMãe de Misericórdia, vida, doçura, esperança nossa, salve! A vós bradamos, os degredados filhos de Eva; a vós suspiramos gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa esses vossos olhos misericordiosos a nós volvei, e depois deste desterro nos mostrai a Jesus, bendito fruto do vosso ventre, ó Clemente, ó Piedosa, ó Doce, sempre virgem Maria.\n\nV. Rogai por nós, Santa Mãe de Deus,\nR. Para que sejamos dignos das promessas de Cristo.\n\nAmém."
];