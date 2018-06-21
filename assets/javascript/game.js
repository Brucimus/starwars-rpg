//Variables
var gameOver = false;
var heroChosen = false;
var defenderChosen = false;
var attackNumber = 1;
var heroAttackValue = 0;
var heroRef;
var enemyNumber;

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
    $("#hero").html("<p> HERO </p>");
    $("#enemies").html("<p> ENEMIES </p>");
    $("#defender").html("<p> DEFENDER </p>");
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
                    enemyNumber--;
                }
            }
        }
        //Moves Defender to Defender and leaves the others in Enemies Section
        redisplay();
        attackButton();
    })
}

//Attack Button, Player Attacks, adds hit strength and decrease Defender HP
function attackButton() {
    if (defenderChosen) {
        $("#attack").click(function() {
            for (var i = 0; i < characters.length; i++) {
                if (document.getElementById("defender").children[1].id === characters[i].characterName) {
                    characters[i].hp = characters[i].hp - (heroAttackValue * attackNumber);
                    attackNumber++;

                    //If Defender Still has HP, attack hero
                    if (characters[i].hp > 0) {
                        heroRef.hp = heroRef.hp - characters[i].attack;
                    } else {

                        //Defeated Defender is removed and player asked to pick another defender
                        characters[i].status = "none";
                        $("#defender").empty();
                        defenderChosen = false;
                        if (enemyNumber === 0) {

                            //Alert Win If all Enemies Defeated
                            alert("You Win! The Force is strong within you.")
                            return;
                        } else {
                            pickDefender();
                            break;
                        }
                    }

                    //Alert Loss If Player Loses All Health
                    if (heroRef.hp <= 0) {
                        alert("You Lose! If you only knew the power of The Dark Side.")
                        return;
                    }
                }
                redisplay();

            }
        })
    }

}
//Place Character Options to hero section
redisplay();

//Choose Hero
$(".pics").on("click", function() {
    for (var i = 0; i < characters.length; i++) {
        if (document.getElementById(this.id).id === characters[i].characterName) {
            characters[i].status = "hero";
            heroAttackValue = characters[i].attack; 
            heroChosen = true;
            heroRef = characters[i];
            enemyNumber = 3;
        } else {
            characters[i].status = "enemy";
        }
    }

    //Moves other hero options to Enemies Section
    redisplay();
    pickDefender();
})

