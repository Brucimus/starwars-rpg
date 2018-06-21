//Win, Loss, is Game Over? Variables
var wins = 0;
var losses = 0;
var gameOver = false;
var heroChosen = false;
var defenderChosen = false;
var attackNumber = 1;

//Character Objects (Status: Hero, Enemies, Defender, Defeated)
var characters = [
    chewbacca = {
        characterName : "Chewy",
        hp : 100,
        attack : 9,
        image : "assets/images/softwookiee.jpg",
        status : "none",
},
    vader = {
        characterName : "DarthVader",
        hp : 110,
        attack : 8,
        image : "assets/images/vader.jpg",
        status : "none",
},
    atAt = {
        characterName : "ATAT",
        hp : 120,
        attack : 7,
        image : "assets/images/softwalker.jpg",
        status : "none",
},
    wicket = {
        characterName : "Wicket",
        hp : 90,
        attack : 10,
        image : "assets/images/wicketthemusical.jpg",
        status : "none",
}]

//Display Images Function
function displayImages(a,b) {
    for (var i = 0; i < characters.length; i++) {
        if (characters[i].status == a) {
        
            var holder = $("<img>");
            holder.addClass('pics');
            
            holder.attr({
                "src":characters[i].image,
                "height": "200px",
                "Width": "200px",
               // "class": characters[i].status,
                "value": characters[i].status.toString(),
                "id": characters[i].characterName.toString(),
                "data-class": characters[i].hp
            });
            
            $(b).append(holder);
        }
    }
}

//Clear Elements Function
function clear() {
    $("#hero").empty();
    $("#enemies").empty();
    $("#defender").empty();
}

//Clear and Redisplay Everything Function
function redisplay() {
    clear();
    if (heroChosen === false) {
        displayImages("none","#hero");
    } else {
        displayImages("hero","#hero");
        displayImages("enemy","#enemies");
        displayImages("defender","#defender");
    }
}

//Choose Defender
function pickDefender() {
    $(".pics").on("click", function() {
        if (heroChosen){
            for (var i = 0; i < characters.length; i++) {
                if (document.getElementById(this.id).id === characters[i].characterName) {
                    characters[i].status = "defender";
                    defenderChosen = "true";
                }
            }
        }
        //Moves Defender to Defender and leaves the others in Enemies Section
        redisplay();
    })
}

//Place Character Options to hero section
redisplay();

//Choose Hero
$(".pics").on("click", function() {
    for (var i = 0; i < characters.length; i++) {
        if (document.getElementById(this.id).id === characters[i].characterName) {
            characters[i].status = "hero";
            heroChosen = true;
        } else {
            characters[i].status = "enemy";
        }
    }

    //Moves other hero options to Enemies Section
    redisplay();
    pickDefender();
})

//If all Enemies Defeated Add Win

//If Player Loses All Health Add Loss

//Attack Button, Player Attacks, adds hit strength and decrease Defender HP
    // $("#attack").click(function() {
    //     def
    
    // //If Defender Still has HP, attack hero
    // })
//Defeated Defender is removed and player asked to pick another defender