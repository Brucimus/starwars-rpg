//Win, Loss, is Game Over? Variables
var wins = 0;
var losses = 0;
var gameOver = false;
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
        characterName : "Darth Vader",
        hp : 110,
        attack : 8,
        image : "assets/images/vader.jpg",
        status : "none",
},
    atAt = {
        characterName : "All Terrain Armored Transport",
        hp : 120,
        attack : 7,
        image : "assets/images/softwalker.jpg",
        status : "none",
},
    wicket = {
        characterName : "Wickeet",
        hp : 90,
        attack : 10,
        image : "assets/images/wicketthemusical.jpg",
        status : "none",
}]

// function displayImages(a,b) {
//     for (var i = 0; i < characters.length; i++) {
//         if (characters[i].status == a) {
        
//             var holder = document.createElement("p");
//             $(b).append(holder);

            // Output a word
            // $(holder).attr("id", colors[i]).text(colors[i]);

            // Make word a random color
            // $(holder).css("color", colorsOfText[i]);
//         }
//     }
// }
//Place Character Options to hero section
// displayImages("none","#hero");
// for (var i = 0; i < characters.length; i++) {
//     if (characters[i].status == "none") {
    
//         var holder = document.createElement("div");
//         $("#hero").append(holder);

//         $(holder).attr("id", characters[i]).text(characters[i].hp);
//     }
// }
function displayImages(a,b) {
    for (var i = 0; i < characters.length; i++) {
        if (characters[i].status == a) {
        
            var holder = document.createElement("div");
            $(b).append(holder);

            $(holder).attr("id", characters[i]).text(characters[i].attack);
        }
    }
}

displayImages("none","#hero");

//Choose Hero
displayImages("hero","#hero");
    //Moves other hero options to Enemies Section
displayImages("enemies","#enemies");
//Choose Defender
displayImages("defender","#defender");

    //Moves Defender to Defender and leaves the others in Enemies Section

//If all Enemies Defeated Add Win

//If Player Loses All Health Add Loss

//Attack Button, Player Attacks, adds hit strength and decrease Defender HP

    //If Defender Still has HP, attack hero

//Defeated Defender is removed and player asked to pick another defender