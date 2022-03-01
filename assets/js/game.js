var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);


var fight = function(enemyName) {
    //window.alert("Welcome to Robot Gladiators!");
    while(playerHealth > 0 && enemyHealth > 0) {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'SKIP' to choose.")
    
    //If player skips
    if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    //if yes leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
    }

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    
    //Check enemy health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        playerMoney = playerMoney + 20;
        break;
    }else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    };

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    //Check player health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
    } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
    
};

var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for(var i = 0; i < enemyNames.length; i++) {
        if(playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    
        var pickedEnemyName = enemyNames[i];

        enemyHealth = 50;

        fight(pickedEnemyName);

    } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    endGame();
};

//to end game
var endGame = function() {
    //if wins
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }
    
    //ask if want to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    
    if (playAgainConfirm) {
        //restart the game
        startGame();
    } else {
        window.alert("Thanks you for playing Robot Gladiators! Come back soon!");
    }
};


startGame();