const misterios = [
    [  // gozosos
       "",     // Perda de memória para facilitar a contagem do array
       " a Anunciação do Arcanjo São Gabriel à Nossa Senhora.",
       " a Visitação de Nossa Senhora à sua prima Santa Isabel.",
       " o Nascimento do Menino Jesus em Belém.",
       " a Apresentação do Menino Jesus no templo e a Purificação de Nossa Senhora.",
       " a Perda e o Encontro do Menino Jesus no templo."
   ],

   [ // dolorosos
       "",     // Perda de memória para facilitar a contagem do array
       " a Agonia de Cristo Nosso Senhor, quando suou sangue no Horto",
       " a Flagelação de Jesus Cristo atado à coluna.",
       " a Coroação de espinho de Nosso Senhor.",
       " Jesus Cristo carregando a Cruz para o Calvário.",
       " a Crucificação e morte de Nosso Senhor Jesus Cristo."
   ],

   [ // gloriosos
       "",     // Perda de memória para facilitar a contagem do array
       " a Ressurreição de Cristo Nosso Senhor.",
       " a Ascensão de Nosso Senhor ao Céu.",
       " a Vinda do Espírito Santo sobre os Apóstolos reunidos com Maria Santíssima no Cenáculo em Jerusalém.",
       " a Assunção de Nossa Senhora ao Céu.",
       " a Coroação de Nossa Senhora no Céu como Rainha de todos os anjos e santos."
   ],

   [ // luminosos
       "",     // Perda de memória para facilitar a contagem do array
       " o Batismo de Jesus no rio Jordão.",
       " a Auto-revelação de Jesus nas Bodas de Caná.",
       " o Anúncio do Reino de Deus.",
       " a Transfiguração de Jesus.",
       " a Instituição da Eucaristia."
   ]
]

const tresAveMarias = [
   "",     // Perda de memória para facilitar a contagem do array
   "A primeira Ave Maria em honra a Deus Pai que nos criou",
   "A segunda Ave Maria a Deus Filho que nos remiu",
   "A terceira Ave Maria ao Espírito Santo que nos santifica"
]

const tituloOracao = [
   "Sinal da Cruz",
   "Oferecimento do Terço",
   "Credo",
   "Pai Nosso...",
   "Ave Maria...",
   "Glória ao Pai...",
   "Ó, meu Jesus...",
   "Agradecimento do Terço",
   "Salve Rainha...",
   "Mãe de Deus..."
]

const oracao = [
   "Em nome do Pai, do Filho e do Espírito Santo.<br>Amém.",

   "Divino Jesus, eu vos ofereço este terço (Rosário) que vou rezar, contemplando os mistérios de nossa Redenção. Concedei-me, pela intercessão de Maria, vossa Mãe Santíssima, a quem me dirijo, as graças necessárias para bem rezá-lo para ganhar as indulgências desta santa devoção.",

   "Creio em Deus Pai todo-poderoso, Criador do céu e da terra, e em Jesus Cristo, seu único Filho, nosso Senhor, que foi concebido pelo poder do Espírito Santo, nasceu da Virgem Maria, padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado; desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus, está sentado à direita de Deus Pai todo poderoso, donde há de vir julgar os vivos e os mortos. Creio no Espírito Santo, na Santa Igreja Católica, na comunhão dos santos, na remissão dos pecados, na ressurreição da carne e na vida eterna.<br>Amém.",

   "Pai Nosso que estais nos céus, santificado seja o Vosso nome, venha a nós o Vosso reino, seja feita a vossa vontade, assim na terra como no céu. O pão nosso de cada dia nos dai hoje; perdoai-nos as nossa ofensas, assim como nós perdoamos a quem nos tem ofendido e não nos deixeis cair em tentação, mas livrai-nos do mal.<br>Amém.",

   "Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre Jesus. Santa Maria Mãe de Deus, rogai por nós pecadores, agora e na hora de nossa morte.<br>Amém.",

   "Glória ao Pai, ao Filho e o Espírito Santo. Como era no princípio, agora e sempre.<br>Amém.",

   "Oh! Meu Jesus, perdoai-nos, livrai-nos do fogo do inferno, levai as almas todas para o céu e socorrei principalmente as que mais precisarem.<br>Amém.",

   "Infinitas graças vos damos, Soberana Rainha, pelos benefícios que todos os dias recebemos de vossas mãos liberais. Dignai-vos, agora e para sempre, tomar-nos debaixo do vosso poderoso amparo e para mais vos obrigar vos saudamos com uma Salve Rainha...",

   "Salve Rainha, Mãe de Misericórdia, vida, doçura, esperança nossa, salve! A vós bradamos, os degredados filhos de Eva; a vós suspiramos gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa esses vossos olhos misericordiosos a nós volvei, e depois deste desterro nos mostrai a Jesus, bendito fruto do vosso ventre, ó Clemente, ó Piedosa, ó Doce, sempre virgem Maria.<br><br>V. Rogai por nós, Santa Mãe de Deus,<br>R. Para que sejamos dignos das promessas de Cristo.<br><br>Amém.",

   "Mãe de Deus, derramai sobre a humanidade inteira, as graças eficazes da Vossa chama de amor, agora e na hora da nossa morte.<br>Amém."
];

const frutos = [
    [  // gozosos
        "",     // Perda de memória para facilitar a contagem do array
        "Clamamos pela humildade",
        "Clamamos pela caridade fraterna",
        "Clamamos pelo espírito de pobreza",
        "Clamamos pela castidade e obediência",
        "Clamamos pela procura de Deus em tudo"
    ],
 
    [ // dolorosos
        "",     // Perda de memória para facilitar a contagem do array

        // "Fruto: A detestação dos pecados",
        // "Fruto: A mortificação da carne",
        // "Fruto: A mortificação do orgulho",
        // "Fruto: A paciência nas tribulações",
        // "Fruto: A mortificação do espírito"

        "Colocamos agora nossas intenções para este mistério",
        "Colocamos agora nossas intenções para este mistério",
        "Colocamos agora nossas intenções para este mistério",
        "Colocamos agora nossas intenções para este mistério",
        "Colocamos agora nossas intenções para este mistério"
    ],
 
    [ // gloriosos
        "",     // Perda de memória para facilitar a contagem do array
        "Clamamos pela fé",
        "Clamamos pela esperança e desejo do Céu",
        "Clamamos pela caridade com o próximo",
        "Clamamos pela graça de uma boa morte",
        "Clamamos pela devoção filial a Nossa Senhora",
    ],
 
    [ // luminosos
        "",     // Perda de memória para facilitar a contagem do array
        "Clamamos pela graça de ser cheios do Espírito Santo",
        "Clamamos pela graça de Deus para as famílias",
        "Clamamos pela graça de viver e anunciar o Evangelho",
        "Clamamos pela graça de configurar-se a Jesus",
        "Clamamos pela graça de um coração adorador"
    ]
]