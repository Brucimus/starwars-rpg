//Win, Loss, is Game Over? Variables
var wins = 0;
var losses = 0;
var gameOver = false;
var attackNumber = 1;

//Character Objects (Status: Hero, Enemies, Defender, Defeated)
var chewbacca = {
    name = "Chewbacca",
    hp = 100,
    attack = 9,
    // image =
    status = none,
}

var vadar = {
    name = "Darth Vadar",
    hp = 110,
    attack = 8,
    // image =
    status = none,
}

var atAt = {
    name = "All Terrain Armored Transport",
    hp = 120,
    attack = 7,
    // image =
    status = none,
}

var wicket = {
    name = "Wickeet",
    hp = 90,
    attack = 10,
    // image =
    status = none,
}

//Place Character Options to hero section


//Choose Hero

    //Moves other hero options to Enemies Section

//Choose Defender

    //Moves Defender to Defender and leaves the others in Enemies Section

//If all Enemies Defeated Add Win

//If Player Loses All Health Add Loss

//Attack Button, Player Attacks, adds hit strength and decrease Defender HP

    //If Defender Still has HP, attack hero

//Defeated Defender is removed and player asked to pick another defender