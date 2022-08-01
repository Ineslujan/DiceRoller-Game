// 1)
// créer div
// y ajouter une classe "dice"
// insérer la DIV dans la DIV #player



// 2)
// Créer fonction pour "tirer" un nombre aléatoire entre 1 et 6
// Le résultat de cette fonction fera déplacer la position du dé "sprite" : 100px de large

// (pour modifier un sprite : background-position pour se déplacer dans le "sprite")



// 3)
// Demander au joueur combien de dés il souhaite lancer
// créer une fonction du point 1 (création du dé)
// executer la fonction autant de fois que le joueur souhaite un dé
// parametre fonction création = combien le joueur souhaite de dés
// une fonction avec une boucle qui prend en compte le parametre



//4) BONUS 
// créer div
// y ajouter un ID "dealer" et une class "board"
// insérer la DIV apres la DIV #player
// générer un tirage dans la zone player ET dealer




// création de la div dealer avec innerHTML, ne pas oublier le "+=" pour ajouter (et non remplacer)
document.getElementById("app").innerHTML += `<div class="board" id="dealer"></div>`

// création de la fonction pour tirer un nombre aléatoire entre 1 et 6
var diceRandom = function () {
    var random = Math.round(Math.random() * (6 - 1) + 1);
    console.log(random)
    // Calcul pour le déplacement du sprite
    var position = -(random * 100 - 100) + "px";
    return position
}


// Création de la fonction pour créer les dés rapidement
var nbDice = function (nb,joueurDealer) {
    // création de la boucle pour répéter la création des dés suivant la demande du joueur
    for (var i = 0; i < nb; i++) {
        // création de la div dé
        var divDice = document.createElement("div");
        divDice.classList.add("dice")
        // affichage du dé dans la div ID correspondant au 2nd parametre (player ou dealer)
        document.getElementById(`${joueurDealer}`).appendChild(divDice)
        // Déplacement du sprite / background grâce à la fonction
        // On rajoute l'index au querySelectorAll pour travailler sur celui en cours
        document.querySelectorAll(`#${joueurDealer} .dice`)[i].style.backgroundPosition = diceRandom()
    }
}



// Demande au joueur combien il souhaite de dés :
var nb = parseInt(prompt("Cher joueur, combien de dés souhaitez-vous ?"))
// Mettre en string le player car il n'est pas défini ailleurs
nbDice(nb,"player")

// Demande au croupier combien il souhaite de dés :
var nb = parseInt(prompt("Cher croupier, combien de dés souhaitez-vous ?"))
// Mettre en string le dealer car il n'est pas défini ailleurs
nbDice(nb,"dealer")






